const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.method)
  res.send('/index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('/index')
})

module.exports = router
