const user = require('../service/user')
const svgCaptcha = require('svg-captcha')
const config = require('../config/config')
const { encrypto } = require('../utils/cipher')

exports.showIndex = async (req, res, next) => {
  res.render('index.html', {
    // sessionUser: req.session.user
  })
}

exports.showLogin = async (req, res, next) => {
  res.render('login.html')
}

// home 页
exports.showHome = async (req, res, next) => {
  res.render('people-home.html')
}

exports.singup = async (req, res, next) => {

  const { username, password, nickname, captcha } = req.body

  const { captcha: sessionCaptcha } = req.session

  if (+new Date() > sessionCaptcha.expires) {
    return res.status(200).json({
      code: 4,
      message: '验证码已过期'
    })
  }

  if (!(captcha.toLowerCase() === sessionCaptcha.text.toLowerCase())) {
    return res.status(200).json({
      code: 3,
      message: '验证码错误'
    })
  }

  if (await user.findNickname(nickname)) {
    return res.status(200).json({
      code: 1,
      message: '真实姓名已存在'
    })
  }

  if (await user.findUsername(username)) {
    return res.status(200).json({
      code: 2,
      message: '用户名已存在'
    })
  }

  const userInfo = await user.create({ nickname, password, username })

  if (userInfo._id) {
    res.status(200).json({
      code: 0,
      message: '创建用户成功'
    })
  }
}

exports.captcha = async (req, res, next) => {
  const captcha = svgCaptcha.create()
  
  req.session.captcha = {
    text: captcha.text,
    expires: +new Date() + 1000 * 15
  }
  res.type('svg')
  res.status(200).send(captcha.data)
}

exports.singin = async (req, res, next) => {
  const { username, password, remember } = req.body

  const users = await user.findUsername(username)

  if (!users) {
    return res.status(200).json({
      code: '1',
      message: '用户名不存在'
    })
  }

  if (password !== users.password) {
    return res.status(200).json({
      code: 2,
      message: '密码错误'
    })
  }

  // 设置 cookie
  if (remember) {
    res.cookie('user', encrypto(JSON.stringify(users)), {
      maxAge: config.rememberMeExpires
    })
    
  }

  // 记录 session
  req.session.user = users

  res.status(200).json({
    code: 0,
    message: '用户登录成功'
  })
}

exports.loginout = async (req, res, next) => {
  // 清除 session
  req.session.user = null
  // 清除 cookie
  res.clearCookie('user')
  // 跳转到登录页
  res.redirect('/login')
}