// 找到第k个最大整数
export default (arr, k) => {
  if (!Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  let kMax = 0
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    if (i === (arr.length - k)) {
      return arr[i]
    }
  }
  return kMax
}
