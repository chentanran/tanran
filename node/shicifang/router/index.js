const express = require('express')
const indexCtrl = require('../controller/index')

const router = express.Router()

router
  .get('/', indexCtrl.showIndex)
  .get('/login', indexCtrl.showLogin)
  .post('/singup', indexCtrl.singup)

module.exports = router