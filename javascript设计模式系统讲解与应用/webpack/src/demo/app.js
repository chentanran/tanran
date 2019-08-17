const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.get('/api/list', (req, res) => {
  let buffer = fs.readFileSync(path.join(__dirname, './list.json'))
  console.log(String(buffer))
  res.send(String(buffer))
})

app.listen(3000, () => {
  console.log('服务启动在3000端口上了')
})
