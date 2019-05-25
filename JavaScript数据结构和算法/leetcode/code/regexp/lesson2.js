export default (str, node) => {
  // 对模式变量进行正则筛选
  let nodeArr = node.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
  let cur = 0
  let strLen = str.length
  for (let i = 0; i < nodeArr.length; i++) {
    let m = nodeArr[i].split('')
    if (m[1] === '*') {
      if (m[0] === '.') {
        cur = strLen
        break
      } else {
        while (str[cur] === m[0]) {
          cur++
        }
      }
    } else {
      for (let j = 0; j < m.length; j++) {
        if (str[cur] !== m[j]) {
          return false
        } else {
          cur++
        }
      }
    }
  }
  return cur === strLen
}
