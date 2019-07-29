const user = require('../service/user')
const { encrypto } = require('../utils/cipher')

module.exports = async (req, res, next) => {
  const { user: sessionUser } = req.session
  // console.log(req)
  if (!sessionUser) {
    const { user: cookieUser } = req.cookies
    // console.log(4)
      if (!cookieUser) {
        return next()
      }
      // console.log(3)
    // 校验用户信息
    try {
      // console.log(7)
      // if (!JSON.parse(cookieUser)) {
      //   return next()
      // }
      // cookieUser = encrypto((cookieUser))
      // console.log(cookieUser.username)
      const users = await user.findUsername(cookieUser.username)
      // console.log(users)
      if (!users) {
        return next()
      }
      // console.log(1)
      // console.log(users.password, cookieUser.password)
      // if (users.password !== cookieUser.password) {
      //   return next()
      // }
      // console.log(cookieUser)
      req.session.user = users
    } catch(err) {
      // console.log(5)
      return next()
    }
  }

  next()
}