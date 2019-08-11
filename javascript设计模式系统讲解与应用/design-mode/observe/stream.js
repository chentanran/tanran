const fs = require('fs')
const readStream = fs.createReadStream('./index.txt')
// 读取文件流 获取长度
let length = 0
readStream.on('data', (chunk) => {
  let len = chunk.toString().length
  console.log(len)
  length += len
})

readStream.on('end', () => {
  console.log('length', length)
})