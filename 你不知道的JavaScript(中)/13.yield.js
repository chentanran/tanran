function *foo(x) {
  let y = x * (yield)
  return y
}

let abc = foo(6)

abc.next() // 启动生成器

let res = abc.next(7) // 第二个next调用完成第一个被暂停的yield表达式

console.log(res.value)
console.log(abc.value)