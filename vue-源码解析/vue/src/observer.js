/**
* 观察者
*/

class Observer {
  constructor (data) {
    this.data = data
    this.walk(this.data)
  }
  walk (data) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach(key => {
      this.subscription(data, key, data[key])
      // 如果 data[key] 是复杂类型
      this.walk(data[key])
    })
  }
  //
  subscription (obj, key, value) {
    let self = this
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        // 订阅
        Dep.target && dep.addSubs(Dep.target)
        return value
      },
      set (newVal) {
        if (newVal === value) {
          return
        }
        value = newVal
        self.walk(newVal)
        // 发布
        dep.publish()
      }
    })
  }
}