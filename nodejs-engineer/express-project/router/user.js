const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validate = require('../middleware/validator/userValidator')
const { verifyToken } = require('../utils/jwt')
const multer = require('multer')
const upload = multer({ dest: 'public/' })

router
.post('/register', validate.register, userController.register)
.post('/login', validate.login, userController.login)
.get('/list', verifyToken(), userController.list)
.post('/update', verifyToken(), validate.update, userController.update)
.post('/upload', verifyToken(), upload.single('headimg'), userController.upload)
.get('/subscribe/:userId', verifyToken(), userController.subscribe)
.get('/unsubscribe/:userId', verifyToken(), userController.unsubscribe)
.get('/getUser/:userId', verifyToken(), userController.getUser)

module.exports = router
