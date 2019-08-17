//
trigger: function (eventName) {
  let list, calls, ev, callback, args
  let both = 2
  if (!(calls = this._callbacks)) {
    return this
  }

  while (both--) {
    ev = both ? eventName : 'all'
    if (list = call[ev]) {
      for (let i = 0, l = list.length; i < l; i++) {
        if (!(callback = list[i])) {
          list.splice(i, 1)
          i--
          l--
        } else {
          args = both ? Array.prototype.slice.call(arguments, 1) : arguments
          callback[0].apply(callback[1] || this, args)
        }
      }
    }
  }
  return this
}