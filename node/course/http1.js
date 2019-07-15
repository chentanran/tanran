const http = require('http')

http.createServer((req, res) => {
  res.end('hello')
}).listen(8099, () => {
  console.log('serve localhost:8000')
})