class Adaptee {
  constructor(){}
  specificRequest() {
    return `这是一家来自幼儿园的插头`
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    console.log(`${info} -> 转化成 -> 小学插头`)
  }
}

// 测试
let a = new Target()
a.request()

// 经典应用
// vue.computed
