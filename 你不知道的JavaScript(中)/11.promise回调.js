function ajax(url, callback) {
  callback(1)
}

function request(url) {
  return new Promise(function(resolve, reject) {
    ajax(url, resolve)
  })
}

request('http://www.baidu.com').then(function(res) {
  console.log(res)
  return request('http://www.taobao.com' + res)
}).then(function(res) {
  console.log(res)
})

// 225页