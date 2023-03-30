const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  image: { type: String, default: null },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
})

module.exports = userSchema