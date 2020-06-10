function max (a, b) {
  return (a > b) ? a : b
}

function knapspack (capacity, size, value, n) {
  if (n == 0 || capacity == 0) {
    return 0
  }
  if (size[n - 1] > capacity) {
    return knapspack(capacity, size, value, n - 1)
  } else {
    return max(value[n - 1] + 
      knapspack(capacity - size[n - 1], size, value, n - 1),
      knapspack(capacity, size, value, n - 1)
    )
  }
}

function dKnapspack (capacity, size, value, n) {
  let K = []
  // 创建二维数组
  for (let i = 0; i <= capacity + 1; ++i) {
    K[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0
      } else if (size[i - 1] <= w) { // i = 3 size[i - 1] = 7 w = 7
        // value[i - 1] = 5 ** K[i - 1][w - size[i - 1]] = 0 ** K[i - 1][w] = 4
        K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w])
        // console.log(K[i][w])
      } else {
        // console.log(K[i][w], '--------')
        K[i][w] = K[i - 1][w]
      }
      // console.log(K[i][w] + ' ')
    }
    console.log(K, '---')
  }
  return K[n][capacity]
}

var value = [4, 5, 10, 11, 13]
var size = [3, 4, 7, 8, 9]
var capacity = 16
var n = 5
// console.log(knapspack(capacity, size, value, n))
console.log(dKnapspack(capacity, size, value, n))