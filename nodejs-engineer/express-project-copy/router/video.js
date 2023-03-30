const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  console.log(req.method)
  res.send('/list')
})

module.exports = router
