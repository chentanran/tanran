const express = require('express')
const webpack = require('webpack')
// 如果使用 middleware 必须使用 html-webpack-plugin插件, 否则html文件无法正确输出到express服务器的根目录
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}))

app.listen(3000, function() {
  console.log('http://localhost:3000')
})
