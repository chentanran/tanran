// 数组间最大间距
// export default (arr) => {
//   if (!Array.isArray(arr)) {
//     throw new Error('请输入数组')
//   }
//   if (arr.length < 2) {
//     return 0
//   }
//   arr.sort((a, b) => {
//     return a - b
//   })
//   let max = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     let tmp = arr[i + 1] - arr[i]
//     if (tmp > max) {
//       max = tmp
//     }
//   }
//   return max
// }

export default (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  let max = 0
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      let min = arr[j]
      if (min > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = min
      }
    }
    if (i < arr.length) {
      let sub = arr[i] - arr[i - 1]
      if (sub > max) {
        max = sub
      }
    }
  }
  return max
}
