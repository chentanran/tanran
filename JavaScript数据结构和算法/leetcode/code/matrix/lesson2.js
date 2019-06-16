export default (arr) => {
  // 翻转数组
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = 0; j < arr.length; j++) {
      let tmp = arr[i][j]
      arr[i][j] = arr[arr.length - 1 - i][j]
      arr[arr.length - 1 - i][j] = tmp
    }
  }
  // 旋转轴
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let tmp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = tmp
    }
  }
  return arr
}
