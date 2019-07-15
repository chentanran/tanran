const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
// const htmlWithingLoader = require('html-withimg-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // entry: ['@babel/polyfill', './src/main.js'], // 兼容性处理
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '..', './dist'), // 解析当前相对路径为绝对路径
    filename: '[name].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: { // 多入口时, 抽取公共代码
      chunks: 'all'
    }
  },
  // watch: true // 监视本地项目文件的变化,自动更新
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(), // 清除dist目录
    new CopyWebpackPlugin([ // 拷贝文件
      { from: path.join(__dirname, '..', './static'), to: 'static' }
    ]),
    new webpack.BannerPlugin('娃哈哈!!!'), // 版权信息
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // 每个模块都引入jquery
    new MiniCssExtractPlugin({ filename: '[name].css' }), // 将css提取到独立的文件中去
    new webpack.IgnorePlugin(/\.\/locale/, /moment/) // 忽略国际化的包, 减少代码体积
  ],
  module: {
    noParse: /jquery/, // 排除某些文件解析
    rules: [
      // css css-loader解析css文件 style-loader放到html中使其生效 从右到左解析
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // postcss-loader 兼容性处理 自动加前缀
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] }, // 配置css-loader
      // less
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'] },
      // 图片、字体、
      { test: /\.(jpg|jpeg|png|bmp|gif)$/, use: { loader: 'url-loader', options: { limit: 5 * 1024, outputPath: 'imgs', name: '[name]-[hash:3].[ext]' } } },
      { test: /\.(woff|woff2|eot|svg|ttf)$/, use: 'url-loader' },
      // babel
      { test: /\.js$/, use: {
        loader: 'babel-loader', 
        // options: { 
        //   presets: ['@babel/env'],
        //   plugins: [
        //     '@babel/plugin-proposal-class-properties', // class
        //     '@babel/plugin-transform-runtime' // generator
        //   ]}
      },
        exclude: /node_modules/, // 排除模块
        include: path.resolve(__dirname, '../src') // 只解析某个模块的代码
      },
      // 处理引入html文件
      { test: /\.(htm|html)&/i, loader: 'html-withing-loader' },
    ]
  }
}