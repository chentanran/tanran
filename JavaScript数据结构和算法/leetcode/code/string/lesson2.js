export default (str) => {
  let r = []
  let match = (strs) => {
    let j = strs.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(strs)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for (let i = 0; i < str.length; i++) {
    let result = match(str.slice(i))
    if (result) {
      r.push(result)
    }
  }
  return r
}
