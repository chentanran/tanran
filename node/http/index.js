const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        throw err
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (url.startsWith('/assets')) {
    fs.readFile(`.${url}`, (err, data) => {
      if (err) {
        throw err
      }
      const contentType = mime.getType(path.extname(url))
      res.statusCode = 200
      res.setHeader('Content-Type', contentType)
      res.end(data)
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('404 Not Found')
  }
})

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`)
})
