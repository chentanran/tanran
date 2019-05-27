let memoizer = function (memo, callback) {
  let shell = function (n) {
    let result = memo[n]
    if (typeof result !== 'number') {
      result = callback(shell, n)
      memo[n] = result
    }
    console.log(memo)
    return result
  }
  return shell
}

let memo = [0, 1]
// 相加
let fib = memoizer(memo, (shell, n) => {
  return shell(n - 1) + shell(n - 2)
})
// 相乘
let factorial = memoizer(memo, (shell, n) => {
  return n * shell(n-1)
})

console.log(factorial(10))
