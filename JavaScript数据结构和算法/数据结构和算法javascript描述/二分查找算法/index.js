function binSearch (arr, data) {
  let upperBound = arr.length - 1
  let lowerBound = 0
  while (lowerBound <= upperBound) {
    let mid = Math.floor((upperBound + lowerBound) / 2)
    if (arr[mid] < data) {
      lowerBound = mid + 1
    } else if (arr[mid] > data) {
      upperBound = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

function count (arr, data) {
  let count = 0
  let position = binSearch(arr, data)
  if (position > -1) {
    ++count
    for (let i = position - 1; i > 0; --i) {
      if (arr[i] === data) {
        ++count
      } else {
        break
      }
    }
    for (let i = position + 1; i < arr.length; i++) {
      if (arr[i] === data) {
        ++count
      } else {
        break
      }
    }
  }
  return count
}

let nums = []
for (let i = 0; i < 100; ++i) {
  nums[i] = i
}
let retVal = binSearch(nums, 101)

console.log(retVal)
