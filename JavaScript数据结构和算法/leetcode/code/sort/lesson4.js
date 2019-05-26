// 奇偶排序
export default (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  if (arr.length % 2 !== 0) {
    throw new Error('请输入偶数位长度')
  }
  arr.sort((a, b) => a - b)
  let odd = 1
  let even = 0
  let newArr = []
  arr.forEach(item => {
    if (item % 2 === 1) {
      newArr[odd] = item
      odd += 2
    } else {
      newArr[even] = item
      even += 2
    }
  })
  return newArr
}
