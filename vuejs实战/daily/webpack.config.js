var path = require("path");
// 导入插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// var htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

var config = {
  entry: {
    main: './main'
  },
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: 'main.js'
  },

  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: 'css-loader',
      //     fallback: 'style-loader'
      //   }) 
      //   // [
      //   //   "style-loader",
      //   //    "css-loader"
      //   // ]
      // }

      {
        test: /\.vue$/,
        // use: ["vue-loader"]
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: "css-loader",
              fallback: "vue-style-loader",
            })
          }
        }
      },

      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: "url-loader?limit=1024"
      },

      // {
      //   test: /\.css$/,
      // //   use: ExtractCssChunks.extract({
      // //     use: 'css-loader'
      // //  }),
      //  use: [
      //    "style-loader",
      //    "css-loader",
      //  ]
      // },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },

      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
      
    ]

  },

  plugins: [
    // 重命名提取后的文件
    new ExtractTextPlugin({
      filename: `[name].css`,
      allChunks: true
    }),

    // new ExtractCssChunks(),
    // new MiniCssExtractPlugin({
    //     filename: `main.css`
    // }),

    new VueLoaderPlugin(),

    //提取模板, 保存入口html文件
    // new htmlWebpackPlugin({
    //   filename: './index.html',
    //   template: './index.html',
    //   inject: true
    // }),

  ],

  // 还需要添加以下内容
  // resolve: {
  //     // alias: {
  //     //     //确定vue的构建版本
  //     //     'vue':'vue/dist/vue.esm.js'
  //     // },
  //     extensions: ['*','.js','.vue','.json']
  // }
};

module.exports = config;