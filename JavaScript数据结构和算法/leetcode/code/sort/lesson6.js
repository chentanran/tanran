// 缺失的第一个正整数
export default (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  // 过滤掉 0 和 负数
  arr = arr.filter(item => item > 0)
  // 检查数组是否还有长度
  if (!arr.length) {
    return 1
  }
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        let tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    arr[i] = min
    if (arr[0] !== 1) {
      return 1
    } else if (i > 0) {
      if ((arr[i] - arr[i - 1]) > 1) {
        return arr[i - 1] + 1
      }
    }
  }
  return arr.pop() + 1
}
