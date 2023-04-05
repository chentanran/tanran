const { Video, Videocomment, Videolike } = require('../model/index')
const lodash = require('lodash')

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
  } else {
    await new Videolike({
      user: userId,
      video: videoId,
      like: 1
    }).save()
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