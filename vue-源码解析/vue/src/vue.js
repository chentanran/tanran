class Vue {
  constructor(options = {}) {
    this.$el = options.el
    this.$data = options.data
    this.$methods = options.methods

    if (this.$el) {
      new Compile(this.$el, this)
    }
  }
}