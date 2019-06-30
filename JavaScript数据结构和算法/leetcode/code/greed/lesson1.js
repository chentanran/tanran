export default (arr) => {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] > arr[j]) {
        count += arr[j + 1] - arr[j]
        i = j
        break
      } else {
        i = j
        break
      }
    }
  }
  return count
}
