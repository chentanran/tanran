/*
  监听者
*/

class Watcher {
  constructor (vm, params, cb) {
    this.vm = vm
    this.params = params
    this.cb = cb

    // 将当前 Watcher 加到 dep.target中
    Dep.target = this

    this.oldValue = this.getVMvalue(this.vm, params)
    // 清除 Dep.target
    Dep.target = null
  }
  // 更新
  updated() {
    this.newValue = this.getVMvalue(this.vm, this.params)
    if (this.oldValue !== this.newValue) {
      this.cb(this.newValue, this.oldValue)
    }
  }
  // 解析对象类型
  getVMvalue(vm, val) {
    let data = vm.$data
    val.split('.').forEach(key => {
      data = data[key]
    })
    return data
  }
}

class Dep {
  constructor () {
    this.subs = []
  }
  // 添加订阅者
  addSubs (watcher) {
    this.subs.push(watcher)
    console.log(this)
  }
  // 发布
  publish () {
    this.subs.forEach(sub => {
      sub.updated()
    })
  }
}