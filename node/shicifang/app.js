const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const router = require('./router/index')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const rememberMe = require('./middleware/remember-me')

const app = express()

// cookie
app.use(cookieParser())

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

// 开放public目录资源
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// 解析客户端提交的数据
app.use(express.json())
app.use(express.urlencoded())

// 定义模板入口
const env = nunjucks.configure(path.join(__dirname, 'view'), {
  autoescape: true,
  express: app,
  watch: true
})

// 添加模板过滤器
env.addFilter('hello', function(str) {
  return 123 // 返回值
})

// 记录登录状态的中间件
app.use(rememberMe)

// 挂载到 app.locals 中的数据可以直接在模板首页访问
app.use((req, res, next) => {
  app.locals.sessionUser = req.session.user
  next()
})

app.use(router)

app.listen(3000, () => {
  console.log('服务启动成功')
  console.log('http://127.0.0.1:3000')
})