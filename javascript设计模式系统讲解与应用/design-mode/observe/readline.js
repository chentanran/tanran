const fs = require('fs')
const readline = require('readline')
// 读取文件的行数
let rl = readline.createInterface({
  input: fs.createReadStream('./index.txt')
})

let lineNum = 0
rl.on('line', (line) => {
  lineNum++
})

rl.on('close', () => {
  console.log('lineNum', lineNum)
})