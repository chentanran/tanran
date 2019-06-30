const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('listening', () => {
  const address = server.address()
  console.log(`server running ${address.address}:${address.port}`)

  // server.setBroadcast(true) // 开启广播模式
  // server.send('hello', 8000, '255.255.255.255')

  // setInterval(() => {
  //   server.send('哈哈哈', 8000, '192.168.43.151')
  // }, 1000)

  setInterval(() => { // 组播
    server.send('hello', 8000, '224.0.1.100')
  }, 1000)
})

server.on('message', (msg, remoteInfo) => {
  console.log(`server got ${msg} from ${remoteInfo.address}:${remoteInfo.port}`)
})

server.on('error', err => {
  console.log('server error', err)
})

server.bind(3000)
