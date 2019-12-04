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
10. loader 
```javascript
  loader 的本质是: output = loader(input)
  // 链式调用
  output = loaderA(loaderB(loaderC(input)))
  // 源码结构
  module.exports = function loader(content, map, meta) {
    var callback = this.async()
    var result = handler(content, map, meta)
    callback(
      null, // error
      result.content, // 转换后的内容
      result.map, // 转换后的 source-map
      result.meta, // 转换后的 AST
    )
  }
  // 配置 rules 规则 数组按照从后往前将资源交给 loader 处理
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
  // options loader 里面提供的配置项
  { test: /\.css$/, use: ['style-loader', {
    loader: 'css-loader',
    options: { // css-loader 配置项 }
  }] }
  // exclude(排除) 与 include(包含) 指定目录下的模块, 可接收正则表达式或者字符串(绝对路径),及由它们组成的数组
  // exclude 和 include 同时使用, exclude 优先级会更高
  rules: [ // exclude
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ } // 排除 node_modules
    ]
  rules: [ // include
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: /src/ } // 只包含 src 目录下的文件
    ] // 对 include 中的子目录进行排除
  rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /src\/lib/ include: /src/ } // 只包含 src 目录下的文件
    ]
  // issuer 加载着
  rules: [
      { test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /src\/lib/
        issuer: { // 表示: 只有 /src/pages 目录下的 js 文件引用 css 文件, 规则才生效, 如果不是 js 文件, 或者 其他目录的 js 文件引用 css , 规则不会生效
          test: /\.js$/,
          include: /src/pages/,
        }
      }
    ]
  // 或者
  rules: [
      { test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        resource: {
          test: /\.css$/,
          exclude: /node_modules/
        }
        issuer: {
          test: /\.js$/,
          exclude: /node_modules/
        }
      }
    ]
  // enforce 指定 loader 种类 (pre(在所有loader之前执行), inline, normal(默认,正常顺序), post(在所有loader之后执行))
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      use: 'eslint-loader'
    }
  ]
  // 常用 loader
  ① babel-loader : 将 es6+ 编译为 es5
  npm install babel-loader @babel/core @babel/preset-env
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true, // 启用缓存机制
        presets: [[
          'env', {
            modules: false
          }
        ]]
      }
    }
  }
  ② ts-loader 连接 webpack 和 Typescript 模块
  npm install ts-loader typescript
  rules: [
    {
      test: /\.ts$/,
      use: 'ts-loader'
    }
  ]
  ③ html-loader 将HTML文件转化为字符串并进行格式化, 可以把一个HTML片段通过JS加载进来
  npm install html-loader
  rules: [
    {
      test: /\.html$/,
      use: 'html-loader'
    }
  ]
  ④ handlebars-loader 处理handlebars模板, 加载后得到一个函数, 可以接收一个变量对象并返回最终的字符串
  npm install handlebars-loader handlebars
  rules: [
    {
      test: /\.handlebars$/,
      use: 'handlebars-loader'
    }
  ]
  // 使用示例
   // content.handlebars
   <div class="entry">
    <h1>{{ title }}</h1>
    <div class="body">{{ body }}</div>
   </div>
   // index.js
   import contentTemplate from './content/handlebars'
   const div = document.createElement('div')
   div.innerHTML = contentTemplate({
     title: 'Title',
     body: "娃哈哈"
   })
   document.body.appendChild(div)
  ⑤ file-loader 打包文件资源,返回 publicPath
    npm install file-loader
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            publicPath: './another-path' // 配置文件路径
          }
        },
      }
    ]
  ⑥ url-loader 设置文件大小阀值 与 file-loader 作用类似
  npm install url-loader
  rules: [
    {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10240, // 大小
          name: '[name].[ext]',
          publicpath: './assets-path'
        }
      }
    }
  ]
  ⑦ vue-loader 处理vue组件
   npm install vue-loader vue vue-template-compiler css-loader
   rules: [
     {
       test: /\.vue$/,
       use: 'vue-loader'
     }
   ]
```

11. 样式处理
```javascript
  1. 处理样式的插件: extract-text-webpack-plugin(4之前) 和 mini-css-extract-plugin(4之后)
    // extract-text-webpack-plugin
    npm install extract-text-webpack-plugin
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    module.exports = {
      plugins: [
        new ExtractTextPlugin("bundle.css")
      ]
    }
  2. SCSS
    npm install sass-loaser node-sass
    node-sass 下载慢解决: npm config ser sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
  3. Less
    npm install less-loader less
    看源码时: 单独配置sourceMap
    {
      lodaer: 'less-loader',
      options: {
        sourceMap: true
      }
    }
  4. PostCSS 接收样式源代码,交由编译插件处理,输出css
    npm install postcss-loader
    rules: [
      {
        test: /\.css/,
        use: {
          'style-loader', 'css-loader', 'postcss-loader'
        }
      }
    ]
    // 根目录创建一个 postcss.config.js
    // 安装 Autoprefixer, 添加前缀
    npm install autoprefixer
    配置:
      const autoprefixer = require('autoprefixer')
      module.exports = {
        plugins: {
          autoprefixer({
            grid: true, // 添加支持的属性
            browsers: {
              '> 1%',
              'last 3 versions',
              'android 4.2',
              'ie 8'
            }
          })
        }
      }
    // stylelint css质量检测工具
    npm install stylelint
    const stylelint = require('stylelint')
    module.exports = {
      plugins: {
        stylelint({
          config: {
            rules: {
              'declaration-no-important': true // 代码不能出现 !important
            }
          }
        })
      }
    }
    // CSSNext 使用最新的css语法特性
    npm install postcss-cssnext
    const postcssCssnext = require('postcss-cssnext')
    module.exports = {
      plugins: [
        postcssCssnext({
          browsers: [
            '> 1%',
            'last 2 versions'
          ]
        })
      ]
    }
  5. CSS Modules 每个css文件都拥有单独的作用域, 不会和外界发生命名冲突
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            lodaer: 'css-loader',
            options: {
              modules: true,
              localldentName: '[name]_[local]_[hash:base64:5]' // 指定css代码类名如何编译
            }
          }
        ]
      }
    ]
```
