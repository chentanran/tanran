const EventEmitter = require('events').EventEmitter
// 继承
class Parson extends EventEmitter {
  constructor (name) {
    super()
    this.name = name
  }
}

let parson = new Parson('wahaha')
parson.on('ha', () => {
  console.log('哈哈哈哈')
})

parson.emit('ha')