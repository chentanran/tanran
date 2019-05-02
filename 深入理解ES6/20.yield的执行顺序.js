function *createIterator() {
  let first = yield 1;
  let second = yield first + 2;
  let third = yield second + 4;
}

let atr = createIterator()

console.log(atr.next(1).value) // 1
console.log(atr.next(1).value) // 3
console.log(atr.next(1).value) // 5