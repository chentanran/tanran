export default (n) => {
  let code = (n) => {
    if (n === 0) {
      return [0]
    }
    if (n === 1) {
      return [0, 1]
    }
    let result = []
    let prev = code(n - 1)
    let max = Math.pow(2, n) - 1
    for (let i = 0; i < prev.length; i++) {
      result[i] = `0${prev[i]}`
      result[max - i] = `1${prev[i]}`
    }
    return result
  }
  return code(n).map(item => {
    return parseInt(item, 2)
  })
}
