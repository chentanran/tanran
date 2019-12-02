exports.done = false

var b = require('./b.js')

console.log('aaaaa', b.done)

exports.done = true

console.log('aaaaaaaaaaaaaaaaa借宿了')