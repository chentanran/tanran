const net = require('net')
const type = require('./type')

let nickname = null

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
})

client.on('connect', () => {
  process.stdout.write('请输入昵称: ')
  // 监听客户端输入
  process.stdin.on('data', data => {
    data = data.toString().trim()
    if (!nickname) {
      client.write(JSON.stringify({
        type: type.login,
        nickname: data
      }))
      return
    }
    // 私聊
    const matches = /^@(\w+)\s(.+)$/.exec(data)
    if (matches) { // 如果本次消息复合 @xxx xxx
      return client.write(JSON.stringify({
        type: type.p2p,
        nickname: matches[1],
        message: matches[2]
      }))
    }
    // 群聊
  client.write(JSON.stringify({
    type: type.broadcast,
    message: data
  }))
  })
})

client.on('data', data => {
  data = JSON.parse(data.toString().trim())
  switch (data.type) {
    case type.login:
      if (!data.success) {
        console.log(`登录失败 ${data.message}`)
        process.stdout.write('请输入昵称: ')
      } else {
        console.log(`登录成功, 当前用户为 ${data.nickname}`)
        console.log(`当前是第 ${data.sumUsers} 个登录用户`)
        nickname = data.nickname
      }
      break
    case type.broadcast:
      console.log(`${data.nickname}: ${data.message}`)
      break
    case type.p2p:
    console.log(`${data.nickname} 对你说: ${data.message}`)
      break
    case type.log:
      console.log(data.message)
      break
    default:
      console.log('未知变量')
      break
  }
})