const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
const videoValidator = require('../middleware/validator/videoValidator')
const { verifyToken } = require('../utils/jwt')

router
.get('/list', videoController.list)
.post('/createvideo', verifyToken(), videoValidator.video, videoController.video)
.get('/videoinfo/:videoId', verifyToken(false), videoController.videoinfo)

module.exports = router
