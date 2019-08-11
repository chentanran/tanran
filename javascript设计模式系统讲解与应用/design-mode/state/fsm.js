const StateMachine = require('javascript-state-machine')

// 状态机模型
let fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transitions: [
    { name: 'resolve', from: 'pending', to: 'fullfilled' },
    { name: 'reject', from: 'pending', to: 'rejected' }
  ],
  methods: {
    // 监听 resolve
    onResolve: function (state, data) {
      data.resolveList.forEach(rs => rs())
    },
    // 监听 reject
    onReject: function (state, data) {
      data.rejectList.forEach(rj => rj())
    }
  }
})
// 创建一个 promise
class MyPromise {
  constructor (fn) {
    this.resolveList = []
    this.rejectList = []

    fn(() => {
      fsm.resolve(this)
    }, () => {
      fsm.reject(this)
    })
  }
  then(successFn, failFn) {
    this.resolveList.push(successFn)
    this.rejectList.push(failFn)
  }
}

// 演示
function loadImg (src) {
  return new MyPromise((resolve, reject) => {
    // let img = document.createElement('img')
    // img.onload = function () {
    //   resolve(img)
    // }
    // img.onerror = function () {
    //   reject(img)
    // }
    // img.src = src
    if (src) {
      resolve(src)
    } else {
      reject(src)
    }
  })
}

let result = loadImg('https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2704186025,1029399712&fm=58')

result.then(function() {
  console.log('ok')
}, function() {
  console.log('error')
})

result.then(function() {
  console.log('ok2')
}, function() {
  console.log('error2')
})