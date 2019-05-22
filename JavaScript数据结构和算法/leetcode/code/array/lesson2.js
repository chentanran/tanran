// 卡片分组
export default (arr) => {
  if (arr.length < 1) return false
  // 排序
  arr.sort((a, b) => a - b)
  let sod = []
  let result = true
  // let min = Number.MAX_SAFE_INTEGER
  for (let i = 0, tmp = []; i < arr.length; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
        if (tmp.length === 2) {
          sod.push([].concat(tmp))
          tmp.length = 0
          i = j
          break
        }
      } else {
        sod.push([].concat(tmp))
        tmp.length = 0
        i = j - 1
        break
      }
    }
  }
  result = sod.every(item => {
    return item.length === 2
  })
  return result
}
