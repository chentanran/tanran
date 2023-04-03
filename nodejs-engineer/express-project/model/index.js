const mongoose = require('mongoose')
const { mongoPath } = require('../config/config.default')

async function main() {
  await mongoose.connect(mongoPath)
}

main().then(res => {
  console.log('连接成功')
}).catch(err => {
  console.log(err, '连接失败')
})

module.exports = {
  User: mongoose.model('User', require('./userModel')),
  Video: mongoose.model('Video', require('./videoModel')),
}