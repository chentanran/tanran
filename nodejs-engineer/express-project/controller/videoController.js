const { Video } = require('../model/index')

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
  console.log(req.params, 'params')
  const { videoId } = req.params
  const dbBack = await Video
                        .findById(videoId)
                        .populate('user', '_id username cover')
  
  res.status(201).json({ data: dbBack })
}