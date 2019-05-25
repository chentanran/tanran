// 种花问题
// 输入: flowerbed = [1,0,0,0,1], n = 1 输出 true
// 输入: flowerbed = [1,0,0,0,1], n = 2 输出 false
export default (flowerbed, n) => {
  // 计数
  let max = 0
  for (let i = 0; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        max++
        i++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        max++
        i++
      } else if (i === flowerbed.length - 2 && flowerbed[i + 1] === 0) {
        max++
      }
    }
  }
  console.log(max, n)
  return max >= n
}
// 当相减为奇数时, /2 + 1 相减为偶数时, /2
