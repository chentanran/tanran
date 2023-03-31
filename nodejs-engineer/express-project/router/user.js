const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validate = require('../middleware/validator/userValidator')
const { verifyToken } = require('../utils/jwt')

router
.post('/register', validate.register, userController.register)
.post('/login', validate.login, userController.login)
.get('/list', verifyToken, userController.list)

module.exports = router
