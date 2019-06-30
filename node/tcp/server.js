const net = require('net')
const type = require('./type')

const server = net.createServer()
const users = []

server.on('connection', clientSocket => {
  clientSocket.on('data', data => {
    data = JSON.parse(data.toString().trim())
    switch (data.type) {
      case type.login:
        if (users.find(item => item.nickname === data.nickname)) {
          return clientSocket.write(JSON.stringify({
            type: type.login,
            success: false,
            nickname: data.nickname,
            message: '昵称已重复'
          }))
        }
        clientSocket.nickname = data.nickname
        users.push(clientSocket)
        clientSocket.write(JSON.stringify({
          type: type.login,
          success: true,
          message: '登录成功',
          sumUsers: users.length,
          nickname: data.nickname
        }))

        // 广播登录用户
        users.forEach(item => {
          if (item.nickname !== clientSocket.nickname) {
            item.write(JSON.stringify({
              type: type.log,
              success: true,
              message: `用户${clientSocket.nickname}已上线, 当前在线人数为${users.length}`
            }))
          }
        })
        break
      case type.broadcast:
        users.forEach(item => {
          item.write(JSON.stringify({
            type: type.broadcast,
            nickname: clientSocket.nickname,
            message: data.message
          }))
        })
        break
      case type.p2p:
        const user = users.find(item => item.nickname === data.nickname)
        if (!user) {
          return clientSocket.write(JSON.stringify({
            type: type.p2p,
            success: false,
            message: '该用户不存在'
          }))
        }

        user.write(JSON.stringify({
          type: type.p2p,
          success: true,
          nickname: clientSocket.nickname,
          message: data.message
        }))
        break
    }
  })
  // 清除离线用户
  clientSocket.on('end', () => {
    const index = users.findIndex(item => item.nickname === clientSocket.nickname)
    if (index !== -1) {
      const outUser = users.splice(index, 1)
      users.forEach(item => {
        item.write(JSON.stringify({
          type: type.log,
          success: true,
          message: `用户${outUser.nickname}已退出, 当前在线用户为${users.length}`
        }))
      })
    }
  })
})

server.listen(3000, () => {
  console.log('127.0.0.1:3000')
})