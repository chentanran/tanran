const express = require('express')
const indexCtrl = require('../controller/index')

const router = express.Router()

router
  .get('/', indexCtrl.showIndex) // 渲染首页
  .get('/login', indexCtrl.showLogin) // 渲染登录页
  .post('/singup', indexCtrl.singup) // 注册
  .get('/captcha', indexCtrl.captcha) // 验证码
  .post('/singin', indexCtrl.singin) // 登录
  .get('/logout', indexCtrl.loginout) // 退出登录
  .get('/home', indexCtrl.showHome)

module.exports = router