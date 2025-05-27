require('dotenv').config({
  path: process.env.NODE_ENVIRONMENT === 'production' ? '.production.env' : '.env'
})

console.log(process.env.aaa)
console.log(process.env.bbb)