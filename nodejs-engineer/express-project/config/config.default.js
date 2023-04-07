/**
 * 默认配置
 */

module.exports.uuid = '309d869d-9f3c-4591-a9ce-565827718a8f'

module.exports.mongoPath = 'mongodb://127.0.0.1:27017/test'

module.exports.redisOption = {
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  username: "default", // needs Redis >= 6
  password: "123456",
  db: 0, // Defaults to 0
}
