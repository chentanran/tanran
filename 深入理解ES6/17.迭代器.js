function createIterator(items) {
  let i = 0;

  return {
    next() {
      let done = (i >= items.length)
      let value = !done ? items[i++] : undefined

      return {
        done,
        value
      }
    }
  }
}

var color = ['red', 'blue', 'yellow']

var iterator = createIterator(color)

console.log(iterator.next()) // done 为 false 时 迭代器往下继续取值
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // done 为 true 时, value反回undefined