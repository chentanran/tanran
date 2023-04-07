const { Video, Videocomment, Videolike, Collect } = require('../model/index')
const lodash = require('lodash')
const { hotInc, topHots } = require('../redis/redishotsinc')

// 热度： 观看+1 点赞+2 评论+2 收藏+3

exports.list = async (req, res) => {
  let { pageNum, pageSize } = req.body
  const dbBack = await Video.find()
                        .skip((pageNum - 1) * pageSize)
                        .limit(pageSize)
                        .sort({ creatAt: 1 })
                        .populate('user')

  const getvideoCount = await Video.countDocuments()
  
  res.status(201).json({ data: dbBack, total: getvideoCount })
}

exports.video = async (req, res) => {
  const id = req.user.userinfo._id
  let body = req.body
  body.user = id
  const videoModel = new Video(body)
  try {
    const dbBack = await videoModel.save()
    res.status(201).json({ data: dbBack })
  } catch {
    res.status(500).json({ err: error })
  }
}

exports.videoinfo = async (req, res) => {
  const { videoId } = req.params
  let dbBack = await Video
                        .findById(videoId)
                        .populate('user', '_id username cover')
  if (dbBack) {
    await hotInc(videoId, 1)
  }
  dbBack = dbBack.toJSON()
  dbBack.islike = false
  if (req.user.userinfo) {
    const userId = req.user.userinfo._id
    if (Videolike.findOne({ user: userId, video: videoId, like: 1 })) {
      dbBack.islike = true
    }
  } 
  
  res.status(201).json({ data: dbBack })
}

exports.comment = async (req, res) => {
  const { videoId } = req.params
  const videoInfo = await Video.findById(videoId)
  if (!videoInfo) {
    return res.status(404).json({ err: '视频不存在' })
  }
  const comment = await new Videocomment({
    content: req.body.content,
    video: videoId,
    user: req.user.userinfo._id
  }).save()
  if (comment) {
    await hotInc(videoId, 2)
  }
  videoInfo.commentCount++
  await videoInfo.save()
  res.status(201).json({ data: comment })
}

exports.deletecomment = async (req, res) => {
  const { videoId, commentId } = req.params
  const videoInfo = await Video.findById(videoId)
  if (!videoInfo) {
    return res.status(404).json({ err: '视频不存在' })
  }
  const comment = await Videocomment.findById(commentId);
  if (!comment) {
    return res.status(404).json({ err: '评论不存在' })
  }
  
  if (!lodash.isEqual(comment.user.toJSON(), req.user.userinfo._id)) {
    return res.status(403).json({ err: '评论不可删除' })
  }
  await Videocomment.deleteOne(comment)
  videoInfo.commentCount--
  await videoInfo.save()
  res.status(200).json({ err: '删除成功' })
}

exports.linkvideo = async (req, res) => {
  const { videoId } = req.params
  const userId = req.user.userinfo._id
  const video = await Video.findById(videoId)
  if (!video) {
    return res.status(404).json({ err: '视频不存在' })
  }
  let doc = await Videolike.findOne({
    user: userId,
    video: videoId
  })
  let islike = true
  if (doc && doc.like === 1) {
    await Videolike.deleteOne(doc)
    islike = false
  } else if (doc && doc.like === -1) {
    doc.like = 1
    await doc.save()
    await hotInc(videoId, 2)
  } else {
    await new Videolike({
      user: userId,
      video: videoId,
      like: 1
    }).save()
    await hotInc(videoId, 2)
  }
  video.linkCount = await Videolike.countDocuments({ video: videoId, like: 1 })
  video.dislinkCount = await Videolike.countDocuments({ video: videoId, like: -1 })
  await video.save()
  res.status(200).json({ ...video.toJSON(), islike })
}

exports.dislinkvideo = async (req, res) => {
  const { videoId } = req.params
  const userId = req.user.userinfo._id
  const video = await Video.findById(videoId)
  if (!video) {
    return res.status(404).json({ err: '视频不存在' })
  }
  let doc = await Videolike.findOne({
    user: userId,
    video: videoId
  })
  let isdislike = true
  if (doc && doc.like === -1) {
    await Videolike.deleteOne(doc)
  } else if (doc && doc.like === 1) {
    doc.like = -1
    await doc.save()
    isdislike = false
  } else {
    await new Videolike({
      user: userId,
      video: videoId,
      like: -1
    }).save()
  }
  video.linkCount = await Videolike.countDocuments({ video: videoId, like: 1 })
  video.dislinkCount = await Videolike.countDocuments({ video: videoId, like: -1 })
  await video.save()
  res.status(200).json({ ...video.toJSON(), isdislike })
}

exports.linklist = async (req, res) => {
  let { pageNum, pageSize } = req.body
  const dbBack = await Videolike.find()
                        .skip((pageNum - 1) * pageSize)
                        .limit(pageSize)
                        .sort({ creatAt: 1 })
                        .populate('video', '_id title vodvideoid user')

  const getvideoCount = await Videolike.countDocuments()
  
  res.status(201).json({ data: dbBack, total: getvideoCount })
}

// 视频收藏
exports.collect = async (req, res) => {
  const videoId = req.params.videoId
  const userId = req.user.userinfo._id
  const video = await Video.findById(videoId)
  if (!video) {
    return res.status(404).json({ err: '视频不存在' })
  }
  let doc = await Collect.findOne({
    user: userId,
    video: video
  })
  if (doc) {
    return res.status(403).json({ err: '视频已被收藏' })
  }
  const mycollect = await Collect({
    user: userId,
    video: videoId
  }).save()
  if(mycollect) {
    await hotInc(videoId, 3)
  }
  res.status(201).json({ data: mycollect })
}

exports.gethots = async (req, res) => {
  let topnum = req.params.topnum
  let tops = await topHots(topnum)
  res.status(200).json({ data: tops })
}