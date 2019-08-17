module.exports = function(source) {
  console.log(source)
  return source.replace(/1110/g, '333')
}