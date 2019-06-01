export default (str) => {
  let arr = []
  console.log(str.length)
  let search = function (cur, strs) {
    if (strs.length > 12) {
      return
    }
    if (cur.length === 4 && cur.join('') === str) {
      arr.push(cur.join('.'))
    } else {
      let len = Math.min(3, strs.length)
      for (let i = 0; i < len; i++) {
        let tmp = strs.substr(0, i + 1)
        if (tmp - 256 < 0) {
          search(cur.concat([tmp * 1]), strs.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return arr
}
