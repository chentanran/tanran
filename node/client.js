const net = require('net')

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
})

client.on('connect', () => {
  console.log('成功啦')

  client.write('我不好')

  // 监听客户端输入
  process.stdin.on('data', data => {
    client.write(data.toString().trim())
  })
})

client.on('data', data => {
  console.log(data.toString())
})