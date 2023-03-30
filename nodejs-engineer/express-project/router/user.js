const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/list', userController.list)

module.exports = router
