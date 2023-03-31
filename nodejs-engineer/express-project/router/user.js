const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validate = require('../middleware/validator/userValidator')

router.get('/register', validate.register, userController.register)

module.exports = router
