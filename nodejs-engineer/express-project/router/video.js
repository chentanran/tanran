const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
const videoValidator = require('../middleware/validator/videoValidator')
const { verifyToken } = require('../utils/jwt')

router
.get('/list', verifyToken(), videoController.list)
.post('/createvideo', verifyToken(), videoValidator.video, videoController.video)
.get('/videoinfo/:videoId', verifyToken(false), videoController.videoinfo)
.post('/comment/:videoId', verifyToken(), videoController.comment)
.get('/deletecomment/:videoId/:commentId', verifyToken(), videoController.deletecomment)
.get('/linkvideo/:videoId', verifyToken(), videoController.linkvideo)
.get('/dislinkvideo/:videoId', verifyToken(), videoController.dislinkvideo)
.get('/linklist', verifyToken(), videoController.linklist)

module.exports = router
