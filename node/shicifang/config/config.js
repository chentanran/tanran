module.exports = {
  baseUrl: 'http://localhost:8010/api/v1/',
  rememberMeExpires: 1000 * 60 * 60 * 24 * 100000,
  crypto: {
    alg: 'aes-256-cfb', // 加规则
    secret: 'wahaha' // 加密关键字
  }
}