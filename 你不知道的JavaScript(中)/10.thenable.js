Object.prototype.then = function() {
  console.log(1)
}
Array.prototype.then = function() {
  console.log(2)
}

var v1 = {'hello': 'world'}
var v2 = ['hello', 'world']

console.log(v1.then(), v2.then())