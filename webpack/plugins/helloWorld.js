module.exports = class HelloWorldPlugins {
  apply(compiler) {
    compiler.hooks.done.tap('HelloWorldPlugin', (state) => {
      console.log('文件打包结束啦')
    })
  }
}