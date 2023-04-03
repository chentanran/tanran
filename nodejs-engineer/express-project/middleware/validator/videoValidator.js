const { body } = require('express-validator')
const validate = require('./errorBack')

module.exports.video = validate([
  body('title')
    .notEmpty().withMessage('视频名不能为空').bail(),
  body('vodvideoId')
    .notEmpty().withMessage('vod不能为空').bail()
])
