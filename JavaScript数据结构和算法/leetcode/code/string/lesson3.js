// 无重复字符的最长字串
let string = (num1, num2) => {
  let num3 = num1.concat(...num2)
  console.log(num3)
  return ''
}

console.log(string([1, 3], [2]))
