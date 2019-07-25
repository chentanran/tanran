const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const router = require('./router/index')

const app = express()

// 开放public目录资源
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// 解析客户端提交的数据
app.use(express.json())
app.use(express.urlencoded())

nunjucks.configure(path.join(__dirname, 'view'), {
  autoescape: true,
  express: app,
  watch: true
})

app.use(router)

app.listen(3000, () => {
  console.log('服务启动成功')
  console.log('http://127.0.0.1:3000')
})