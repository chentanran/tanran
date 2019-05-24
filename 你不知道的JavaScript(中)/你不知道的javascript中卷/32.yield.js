var a = 1;
var b = 2;

function *foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function *bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

function step(gen) {
  var it = gen();
  var last;
  return function() {
    last = it.next(last).value
  }
}

a = 1;
b = 2;

var s1 = step(foo)
var s2 = step(bar)

s1()
console.log(a, b)
s1()
console.log(a, b)
s1()
console.log(a, b)

s2()
console.log(a, b)
s2()
console.log(a, b)
s2()
console.log(a, b)
s2()
console.log(a, b)

