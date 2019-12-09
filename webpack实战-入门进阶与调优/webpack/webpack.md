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

12 代码分片
  1. CommonsChunkPlugin(webpack4 之前) 将多个 chunk 中公共的部分提取出来
  * 开发过程中减少重复模块打包
  * 减小整体资源体积
  * 合理分片后的代码可以更有效的利用客户端缓存
```javascript
  const webpack = require('webpack')
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons', // 指定公共chunk的名字
      filename: 'commons.js' // 提取后的资源文件名
    })
  ]
```
  * 提取 vendor
```javascript
  module.exports = {
    entry: {
      app: './app.js',
      app2: './app2.js',
      vendor: ['react']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', // 将 entry 中的 vendor 中的模块提取出来
        filename: 'vendor.js', // 提取后的资源文件名
        chunks: ['a', 'b'] // 规定从哪些入口中提取文件
        minChunks: n // 只有该模块被 n 个入口同时引用才会进行提取 (接收 数字. Infinity(所有模块都不会被提取). 函数(function(module, count) {  }))
      })
    ]
  }
```
  * hash 与 长效缓存
```javascript
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest' // webpack 运行时的代码提取出来
      })
    ]
```
  2. SplitChunks(webpack4 之后) 代码分片
```javascript
  // 异步加载,可以实现提取公共模块
  module.exports = {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
```
  3. import() 异步加载函数
```javascript
  import('./a.js').then(a => { console.log(a) })
```

13. 生成环境配置
```javascript
  1. 生成环境和开发环境
    // package.json
    "scripts": {
      "dev": "ENV=development webpack-dev-server",
      "build": "ENV=production webpack"
    }
    // webpack.config.js
    const ENV = process.env.ENV
    const isProd = ENV === 'production' // 生成环境
    module.exports = {
      output: {
        filename: isProd ? 'build@[chunkhash].js' : 'bundle.js',
      },
      mode: ENV,
    }
    // 为不同的环境创建配置文件 webpack.development.config.js 和 webpack.production.config.js
    // package.json
    {
      "scripts": {
        "dev": "webpack-dev-server --config=webpack.development.config.js",
        "build": "webpack --config=webpack.production.config.js"
      }
    }
    // 将公共部分提取出来 webpack.common.config.js
    module.exports = {
      entry: './src/index.js'
      // development 和 production 共有配置
    }
    // mode 配置打包环境
  2. 环境变量 DefinePlugin
    const webpack = require('webpack')
    module.exports = {
      plugins: [
        new webpack.DefinePlugin({
          ENV: JSON.stringify('production'), // 配置开发环境
          IS_PRODUCTION: true,
          ENV_ID: 130912098,
          CONSTANTS: JSON.stringify({
            TYPES: ['foo', 'bar']
          })
        })
      ]
    }
    // app.js
    document.write(ENV) // 页面输出 production
    // 或 
    new webpack.definePlugin({ // 如启用 mode: production webpack会自动设置 process.env.MODE_ENV, 不需人为添加
      process.env.MODE_ENV: 'production'
    })
  3. source map (源码映射)
    module.exports  ={
      devtool: 'source-map', // 打开 sourceMap
      // 对于 less sass css 需额外配置
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
    // 安全的 sourceMap 有两个 hidden-source-map 和 nosources-source-map
    // 打开 chrome 开发者工具, soruces 目录 "webpack://" 下 可以找到解析后的工程源码
    // 也可以正常打包输出 sourceMap, 通过服务器 nginx 设置, 将 .map 文件只对固定白名单开放
  4. 压缩 JavaScript (UglifyJS: webpack3, terser: webpack4)
    // webpack3
    plugins: [ new webpack.optimize.UglifyJsPlugin() ]
    // webpack4
    optimization: { // 开启压缩
      minimize: true
    }
    // 或
    optimization: {
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          exclude: /\/excludes/
        })
      ]
    }
  5. 缓存
    1. 资源hash
    2. 输出动态 html
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      plugins: [
        new HtmlWebpackPlugin()
      ]
  6. bundle 体积监控和分析
    const Analyzer = require('webpack-bundle-analyzer).BundleAnalyzerPlugin
    module.exports = {
      plugins: [
        new Analyzer()
      ]
    }
```

14. 打包优化
```javascript
  1. HappyPack 开启多个线程, 并行地对不同模块进行转译, 充分利用本地的计算资源来提升打包速度
    // 单个 loader 优化
    const HappyPack = require('happypack')
    module.exports = {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'happypack/loader',
          }
        ],
        plugins: [
          new HappyPack({
            loaders: [
              {
                loaders: [
                  loader: 'babel-loader',
                  options: {
                    presets: ['react']
                  }
                ]
              }
            ]
          })
        ]
      }
    }
    // 多个 loader 优化
    const HappyPack = require('happypack')
    module.exports = {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'happypack/loader?id=js',
          },
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'happypack/loader?id=ts',
          }
        ],
        plugins: [
          new HappyPack({
            id: 'js',
            loaders: [
              {
                loaders: [
                  loader: 'babel-loader',
                  options: {} // babel-options
                ]
              }
            ]
          }),
          new HappyPack({
            id: 'ts',
            loaders: [{
              loader: 'ts-loader',
              options: {} // ts options
            }]
          })
        ]
      }
    }
  
  2. 缩小打包作用域
    // include
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src\/scripts/, // 只生效于源码目录
          loader: 'babel-loader'
        }
      ]
    }
    // noParse webpack不会去解析这些模块
    module: {
      noparse: /loadsh/
    }
    或
    module: {
      noparse: function(fullPath) {
        return /lib/.test(fullPath) // 完整路径匹配
      }
    }
    // IgnorePlugin 完全排除一些模块, 即使被引用也不会被打包到资源文件中
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/, // 匹配资源文件
        contextRegExp: /moment$/, // 匹配检索目录
      })
    ]
    // Cache  编译代码后保存一份缓存, 执行下一次编译前检查源码文件是否变化, 如没变化, 采用上一次缓存文件
    webpack 5 中 添加了一个新的配置项 cache: { type: 'filesystem' }

  3. 动态链接库 和 DllPlugin
   // 创建一个新的 webpack 配置文件, webpack.vendor.config.js
   const path = require('path')
   const webpack = require('webpack')
   const dllAssetPath = path.join(__dirname, 'dll')
   const dllLibraryName = 'dllExample'
   module.exports = {
     entry: ['react'],
     output: {
       path: dllAssetPath,
       filename: 'vendor.js',
       library: dllLibraryName
     },
     plugins: [
       new webpack.DllPlugin({
         name: dllLibraryName, // 导出的 dll library名字
         path: path.join(dllAssetPath, 'manifest.json') // 资源清单的绝对路径
       })
       new webpack.HashedmoduleIdsPlugin() // 解决数字id 导致的 顺序混乱
     ]
   }
   // vendor 打包
    // package.json
    {
      "scripts": {
        "dll": "webpcpk --config webpack.vendor.config.js"
      }
    }
   // 链接到业务代码
    // webpack.config.js
    const path = require('path')
    const webpack = require('webpack')
    module.exports = {
      plugins: [
        new webpack.DllReferencePlugin({
          manifest: require(path.join(__dirname, 'dll/manifest.json'))
        })
      ]
    }
    // index.html
    <body>
      <script src="dll/vendor.js"></script>
      <script src="dist/app.js"></script>
    </body>
    // 如果报 'dllExample 不存在', 有可能没有指定正确的 output..library, 或忘记在业务代码前加载 vendor.js

  4. tree shaking 检测未被引用的代码, 压缩时去掉 (只对 es6 modules 生效)
    // 通过配置. 禁用 babel-loader 的模块依赖解析, 就可以进行 tree-shaking
    module: {
      rules: [
        {
          test: /\.js$/.
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                [@babel/preset-env, { modules: false }]
              ]
            }
          }]
        }
      ]
    }
```

15. 开发环境调优
```javascript
  1. webpack-dashboard 构建结束后更好的展示输出的打包信息
    npm install webpack-dashboard
    // webpack 配置
    const DashboardPlugin = require('webpack-dashboard/plugin')
    module.exports = {
      entry: './app.js',
      output: {
        filename: '[name].js'
      },
      mode: 'development',
      plugins: [
        new DashboardPlugin()
      ]
    }
    // package.json 配置
    {
      "scripts": {
        "dev": "webpack-dashboard --webpack-dev-server"
      }
    }

  2. webpack-merge 合并代码(后者合并前者)
    npm install webpack-merge
    const merge = require('webpack-merge')
    const common = require('./webpack.common.js')
    module.exports = merge.smart(common, {
      mode: 'production',
      ...
    })
  
  3. speed-measure-webpack-plugin 分析webpack整个打包过程在各个loader和plugin上耗费的时间
    npm install speed-measure-webpack-plugin
    const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
    const smp = new SpeedMeasurePlugin()
    module.exports = smp.wrap({
      entry: 'app.js',
      ...
    })

  4. siz-plugin 监控资源体积的变化(输出本次资源体积, 以及上次构建相比体积变化了多少)
    npm install size-plugin
    const SizePlugin = require('size-plugin')
    module.exports = {
      plugins: [
        new SizePlugin()
      ]
    }
  
  5. 模块热替换 HMR
    const webpack = require('webpack')
    module.exports = {
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
      devServer: {
        hot: true
      }
    }
    // index.js 页面入口
    if (module.hot) {
      module.hot.accept() // 刷新所有页面
    }
    if (module.hot) {
      module.hot.decline() // 关闭当前 index.js 的 HMR
      module.hot.sccept(['./util.js']) // 对指定的文件进行更新
    }
```

16. 其他打包工具
  1. Rollup
```javascript
  1. 安装
    npm install rollup -g
  2. 配置
    // rollup.config.js
    module.exports = {
      input: 'src/app.js',
      output: {
        file: 'dist/bundle.js',
        format: 'cjs'
      }
    }
    // src/app.js
    console.log('娃哈哈真好喝')
  3. 打包
    rollup -c rollup.config.js (-c 参数告诉Rollup使用该配置文件)
  4. tree shaking
    基于对 ES6 Modules 的静态分析, 找出没有被引用过的模块.将其从最后生成的bundle中排除
  5. 可选的输出格式
    CommonJS, amd, esm, iife, umd, system
```
  2. Parcel
```javascript
  1. 打包速度
    * 利用 worker 来并行执行任务
    * 文件系统缓存
    * 资源编译处理流程优化
  2. 打包
    parcel index.html // 执行打包
    parcel build index.html // 打包成文件
  3. 打包 vue 文件
    npm install vue
    npm install parcel-bundler -D
```
