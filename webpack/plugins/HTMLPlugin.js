const fs = require('fs')
const cheerio = require('cheerio')

module.exports = class HTMLPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap('HTMLPlugin', compilation => {
      // console.log(...Object.keys(states))
      // console.log(states.compilation.assets)
      console.log('文件发射完成啦')

      const result = fs.readFileSync(this.options.template, 'utf-8')
      
      let $ = cheerio.load(result)

      Object.keys(compilation.assets).forEach(item => {
        $(`<script src="/${item}"></script>`).appendTo('body')
        // console.log(('./dist/' + this.options.filename).replace(/\\/g, "/"))
        // console.log($.html())
        fs.writeFileSync(('./dist/' + this.options.filename), $.html().replace(/\\+/g, "/"))
      })
    })
  }
}