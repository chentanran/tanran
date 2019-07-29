const crypto = require('crypto')
const { alg, secret } = require('../config/config').crypto

// 加密
exports.encrypto = function (data) {
  const cipher = crypto.createCipher(alg, secret)
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

// 解密
exports.decrypto = function (data) {
  const decipher = crypto.createDecipher(alg, secret)
  let decrypted = decipher.update(data, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}