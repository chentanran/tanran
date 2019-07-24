const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()

// 开放public目录资源
app.use('/public/', express.static(path.join(__dirname, './public/')))

nunjucks.configure(path.join(__dirname, 'view'), {
  autoescape: true,
  express: app,
  watch: true
})

app.get('/', (req, res, next) => {
  // res.status('index.html').send('helloworld')
  res.render('index.html')
})

app.get('/people-home', (req, res, next) => {
  res.render('people-home.html')
})

app.listen(3000, () => {
  console.log('服务启动成功')
  console.log('http://127.0.0.1:3000')
})