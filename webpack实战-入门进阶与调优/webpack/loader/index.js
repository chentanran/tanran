module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable()
  }
  var useStrictPrefix = '\'use strict\';\n\n'
  return useStrictPrefix + content
}