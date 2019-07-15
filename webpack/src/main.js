let a = require('./a')
import './css/index.css'
import './css/index.less'
// import '@babel/polyfill'
// import axios from 'axios'

// axios.get('/api/user', { name: '123,456' }).then(res => {
//   console.log(res)
// })

// console.log(IS_DEV)

import('./a.js').then(res => {
  console.log('2222')
})
