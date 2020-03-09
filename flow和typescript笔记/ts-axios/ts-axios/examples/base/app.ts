import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a:1,
    b:2
  },
  responseType: 'json'
}).then(res => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post1',
  data: {
    a:1,
    b:2
  },
  responseType: 'json'
}).then(res => {
  console.log(res)
})