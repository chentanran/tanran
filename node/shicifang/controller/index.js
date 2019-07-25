const user = require('../service/user')

exports.showIndex = async (req, res, next) => {
  res.render('index.html')
}

exports.showLogin = async (req, res, next) => {
  res.render('login.html')
}

exports.singup = async (req, res, next) => {
  console.log(req.body)
  const { username, password, nickname } = req.body

  if (await user.findNickname(nickname)) {
    return res.status(200).json({
      code: 1,
      message: '真实姓名已存在'
    })
  }

  if (await user.findUsername(username)) {
    return res.status(200).json({
      code: 1,
      message: '用户名已存在'
    })
  }

  const userInfo = await user.create({ nickname, password, username })
  console.log(userInfo)
  if (userInfo._id) {
    res.status(200).json({
      code: 0,
      message: '创建用户成功'
    })
  }
}