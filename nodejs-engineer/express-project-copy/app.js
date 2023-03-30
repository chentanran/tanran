const express = require('express')
const router = require('./router/index')
const video = require('./router/video')

const app = express()

app.use(express.json())
app.use('/user', router)
app.use('/video', video)

app.all('/', (req, res) => {
  console.log(req.body)
  res.send('/index').json()
})

app.use((req, res, next) => {
  res.status(404).send('404')
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('service error')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
