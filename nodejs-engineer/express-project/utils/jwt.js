const jwt = require('jsonwebtoken')
const { uuid } = require('../config/config.default')
const { promisify } = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)

module.exports.createToken = async userinfo => {
  return await tojwt(
    { userinfo },
    uuid,
    {
      expiresIn: 30
    }
  )
}

module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    res.status(402).json({ error: '请传入token' })
  }
  try {
    const userinfo = await verify(token, uuid)
    req.user = userinfo
    next()
  } catch(error) {
    res.status(402).json({ error: '无效的token' })
  }
}