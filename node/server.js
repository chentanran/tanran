const net = require('net')

const server = net.createServer()
const clients = []

server.on('connection', clientSocket => {
  console.log('有新的连接进来了')
  clients.push(clientSocket)
  clientSocket.on('data', data => {
    clients.forEach(socket => {
      if (socket !== clientSocket) {
        socket.write(data)
      }
    })
  })
  // 通过clientSocket给当前连接的客户端发送数据
  clientSocket.write('你好啊')
})

server.listen(3000, () => {
  console.log('127.0.0.1:3000')
})