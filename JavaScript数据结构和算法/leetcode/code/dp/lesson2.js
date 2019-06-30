export default (fights, src, dst, k) => {
  let cheap = (fights, src, dst, k) => {
    let prev = fights.filter(item => item[1] === dst)
    // debugger
    let min = Math.min.apply(null, prev.map(item => {
      if (item[0] === src && k > -1) {
        return item[2]
      } else if (k === 0 && item[0] !== src) {
        return Number.MAX_SAFE_INTEGER
      } else {
        return item[2] + cheap(fights, src, item[0], k - 1)
      }
    }))
    return min
  }
  let min = cheap(fights, src, dst, k)
  return min >= Number.MAX_SAFE_INTEGER ? -1 : min
}
