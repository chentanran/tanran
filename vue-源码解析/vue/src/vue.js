class Vue {
  constructor(options = {}) {
    this.$el = options.el
    this.$data = options.data
    this.$methods = options.methods
    // 将data 和 methods 挂载到 vm上
    this.proxy(this.$data)
    this.proxy(this.$methods)
    // 监听 data 数值改变
    new Observer(this.$data)
    // 编译模板
    if (this.$el) {
      new Compile(this.$el, this)
    }
  }
  //
  proxy (data = {}) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return data[key]
        },
        set (newVal) {
          if (data[key] === newVal) {
            return
          }
          data[key] = newVal
        }
      })
    })
  }
}