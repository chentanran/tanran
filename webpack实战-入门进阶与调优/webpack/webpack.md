# webpack 学习文档与问题总结

1. 安装webpack
```javascript
  npm webpack webpack-cli -D

  报错信息: Refusing to install package with name "webpack" under a package
  解决方法: 将package.json里面的name重命名
```
2. 查看webpack版本号
```javascript
  npx webpack -v
  npx webpack-cli -v
```
3. 打包指令
```javascript
  entry: 入口, output: 出口, mode: 模式(开发(development), 生产(production))
  // 控制台输入
  npx webpack --entry=./pages/index.js --output-filename=bundle.js --mode=development
  // 将打包指令放到package.json的script里面
  "build": "webpack --entry=./pages/index.js --output-filename=bundle.js --mode=development"
  // webpack 默认入口是 src/index.js
  "build": "webpack --output-filename=bundle.js --mode=development"
```
4. 查看webpack配置项
```javascript
  npx webpack -h
```
5. webpack默认配置文件 webpack.config.js
```javascript
  // 配置入口和出口文件
  module.exports = {
    context: path.join(__dirname, './src'), // 资源路口的路径前缀, 使用绝对路径
    entry: './index.js',
    output: {
      filename: 'bundle.js'
    },
    mode: 'development'
  }
  // 改变package.json build配置
  "build": "webpack"
```
6. webpack-dev-server 内容更改,自动刷新浏览器
```javascript
  1. 令webpack进行模块打包, 并处理打包结果的资源请求
  2. 作为普通的Web Server, 处理静态资源文件请求
  // 安装
  npm install webpack-dev-server -D
  // package.json中配置
  "dev": "webpack-dev-server"
  // webpack.config.js配置
  devServer: {
    publicPath: '/dist'
  }
```
7. context 资源路口的路径前缀, 使用绝对路径
```javascript
  context: path.join(__dirname, './src'), 
```
8. entry 资源入口
```javascript
  // 1. entry : 字符串, 数组, 对象, 函数
  entry: './src/index.js' // 字符串
  entry: ['babel-polyfill', './src/index.js'] // 数组
  entry: { index: './src/index.js', lib: './src/lib.js' } // 对象
  entry: () => new Promise((resolve) => { setTimeout(() => { resolve('./src/index.js'), 1000 }) })
  // 2. 提取vendor, 通过 optimization.splitChunks 将公共模块提取出来, 可以有效利用客户端缓存, 加快整体渲染速度
  entry: { // 单页
    app: './src/app.js',
    vendor: ['react', 'react-dom', 'react-router']
  }
  entry: { // 多页, 将公共的提取出来
    app: './src/app.js',
    page: './src/page.js',
    vendor: ['react', 'react-dom', 'react-router']
  }
```
9. output 资源出口
```javascript
 // 1. filename: 输出资源文件名, 形式为字符串
  output: {
    filename: 'bundle.js' // filename: '[name]@[chunkhash].js'
  }
  // 2.path: 指定资源输出的位置, 必须为绝对路径
  output: {
    filename: 'build.js',
    path: path.join(__dirname, 'dist')
  }
  // publicPath: 指定资源的请求位置: 由js或css所请求的间接资源路径
  ①: html相关
  output: {
    publicPath: ''
  }
  ②: host相关
  output: {
    publicPath: '/'
  }
  ③: CDN相关
  output: {
    publicPath: 'http://cdn.com/'
  }
```
