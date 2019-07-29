const user = require('../service/user')
const { decrypto } = require('../utils/cipher')

module.exports = async (req, res, next) => {
  const { user: sessionUser } = req.session

  if (!sessionUser) {
    const { user: cookieUser } = req.cookies
    // console.log(4)
      if (!cookieUser) {
        return next()
      }
      // console.log(3)
    // 校验用户信息
    try {
      let cookieUser = JSON.parse(decrypto(req.cookies.user))
      // console.log(cookieUser)
      const users = await user.findUsername(cookieUser.username)
      // console.log(users)
      if (!users) {
        return next()
      }
      // console.log(1)
      // console.log(users.password, cookieUser.password)
      if (users.password !== cookieUser.password) {
        return next()
      }
      // console.log(cookieUser)
      req.session.user = users
    } catch(err) {
      console.log(err)
      return next()
    }
  }

  next()
}