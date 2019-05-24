function *foo() {
  var x = yield 2;
  z++;
  var y = yield (x * z)
  console.log(x, y, z)
}

var z = 1

var it1 = foo()
var it2 = foo()

var val1 = it1.next().value
var val2 = it2.next().value

console.log(val1)
console.log(val2)

val1 = it1.next( val2 * 20 ).value
val2 = it2.next(val1 * 5).value

console.log(val1)
console.log(val2)

it1.next(val1 / 2)
it2.next(val2 / 4)

