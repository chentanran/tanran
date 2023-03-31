const { body } = require('express-validator')
const validate = require('./errorBack')
const { User } = require('../../model/index')

module.exports.register = validate([
  body('username')
    .notEmpty().withMessage('用户名不能为空').bail()
    .isLength({ min: 3 }).withMessage('用户名长度不能小于3').bail(),
  body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱不合规范').bail()
    .custom(async val => {
      const emailValidate = await User.findOne({ email: val })
      if (emailValidate) {
        return Promise.reject('邮箱不能重复')
      }
    }).bail()
])

module.exports.login = validate([
  body('username')
    .notEmpty().withMessage('用户名不能为空').bail()
    .isLength({ min: 3 }).withMessage('用户名长度不能小于3').bail(),
  body('password')
    .notEmpty().withMessage('密码不能为空').bail()
])