const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')

router.get('/list', videoController.list)

module.exports = router
