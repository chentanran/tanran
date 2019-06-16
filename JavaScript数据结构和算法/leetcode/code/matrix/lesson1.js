export default (arr) => {
  let map = (arr, r = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === arr.length - 1) {
        r = r.concat(arr[i].reverse())
      } else {
        r.push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length) {
        r.push(arr[i].shift())
      }
    }
    if (arr.length > 0) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}
