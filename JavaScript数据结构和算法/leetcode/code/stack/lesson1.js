// 整数位得分数 C表示最后一轮得分无效 D表示本轮得分是前轮的两倍 +表示本轮获取的得分是前两轮的和
export default (arr) => {
  let result = []

  arr.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop()
        }
        break
      case 'D':
        if (result.length) {
          let pre = result.pop()
          result.push(pre, pre * 2)
        }
        break
      case '+':
        if (result.length > 1) {
          let per1 = result.pop()
          let per2 = result.pop()
          result.push(per2, per1, per1 + per2)
        }
        break
      default:
        result.push(item * 1)
    }
  })
  return result.reduce((pre1, pre2) => pre1 + pre2, 0)
  // return result
}
