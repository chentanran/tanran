const axios = require('axios')
const config = require('../config/config')

// 配置基准路径
const instance = axios.create({
  baseURL: config.baseUrl
})

module.exports = instance