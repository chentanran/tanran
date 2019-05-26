// 冒泡排序
export default (arr) => {
  if (!arr && !Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let flag = true
    for (let j = 0; j < i; j++) {
      let tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        flag = false
      }
    }
    if (flag) {
      break
    }
  }
  return arr
}
