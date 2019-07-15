const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length // cpu长度

if (cluster.isMaster) {
  // for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  // }
} else {
  http.createServer((req, res) => {
    res.end('1111')
  }).listen(8000, () => {
    console.log('127.0.0.1:8000')
  })
}