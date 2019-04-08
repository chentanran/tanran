miniConsole = {
  log: function() {
    console.log(Array.prototype.join.call(arguments))
  },
  warn: function() {
    console.warn(Array.prototype.join.call(arguments))
  }
}