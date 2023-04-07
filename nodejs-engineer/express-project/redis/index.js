const Redis = require("ioredis")
const { redisOption } = require('../config/config.default')

const redis = new Redis(redisOption)

redis.on('error', err => {
  if (err) {
    console.log(err, 'redis链接错误')
    redis.quit()
  }
})

redis.on('ready', () => {
  console.log('redis链接成功')
})

exports.redis = redis