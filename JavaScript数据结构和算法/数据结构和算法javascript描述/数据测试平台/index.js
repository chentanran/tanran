function CArray (numElements) {
  this.dataStore = []
  this.pos = 0
  this.numElements = numElements
  this.insert = insert
  this.toString = toString
  this.clear = clear
  this.setData = setData
  this.swap = swap
  this.bubbleSort = bubbleSort
  this.insertionSort = insertionSort
  this.selectionSort = selectionSort
  this.shellsort = shellsort
  this.shellsort1 = shellsort1
  this.gaps = [5, 3, 1]
  this.setGaps = setGaps
  this.mergeSort = mergeSort
  this.mergeArrays = mergeArrays
  this.qSort = qSort
  for (let i = 0; i < numElements; i++) {
    this.dataStore[i] = 0
  }
}

function setData () {
  for (let i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
  }
}

function clear () {
  for (let i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0
  }
}

function insert (element) {
  this.dataStore[this.pos++] = element
}

function toString () {
  let restr = ''
  for (let i = 0; i < this.dataStore.length; i++) {
    restr += this.dataStore[i] + ' ';
    if (i > 0 && i % 10 === 0) {
      restr += '\n'
    }
  }
  return restr
}

function swap (arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
// 冒泡排序
function bubbleSort () {
  let numElements = this.dataStore.length
  let temp
  for (let outer = numElements; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1)
      }
    }
  }
}
// 插入排序
function insertionSort () {
  let temp, inner
  for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer]
    inner = outer
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1]
      --inner
    }
    this.dataStore[inner] = temp
  }
}
// 选择排序
function selectionSort () {
  let min
  for (let outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer
    for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner
      }
      swap(this.dataStore, outer, min)
    }
  }
}

// 希尔排序
function shellsort () {
  for (let g = 0; g < this.gaps.length; ++g) {
    // 5 10
    for (let i = this.gaps[g]; i < this.dataStore.length; ++i) {
      var temp = this.dataStore[i]
      console.log(this.dataStore[i], '-----')
      for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        console.log(this.dataStore[j], this.dataStore[j - this.gaps[g]])
        this.dataStore[j] = this.dataStore[j - this.gaps[g]]
      }
      this.dataStore[j] = temp
    }
  }
}

// 动态计算间隔序列的希尔排序
function shellsort1 () {
  let N = this.dataStore.length
  let h = 1
  while (h < N/3) {
    h = 3 * h + 1
  }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
        swap(this.dataStore, j, j - h)
      }
    }
    h = (h - 1) / 3
  }
}

function setGaps (arr) {
  this.gaps = arr
}

// 归并排序
function mergeSort () {
  if (this.dataStore.length < 2) {
    return
  }
  let step = 1
  let left
  let right
  while (step < this.dataStore.length) {
    left = 0
    right = step
    while (right + step <= this.dataStore.length) {
      mergeArrays(this.dataStore, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }
    if (right < this.dataStore.length) {
      mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length)
    }
    step *= 2
  }
}

function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1)
  let leftArr = new Array(stopLeft - startLeft + 1)
  k = startRight
  for (let i = 0; i < (rightArr.length - 1); i++) {
    rightArr[i] = arr[k]
    ++k
  }
  k = startLeft
  for (let i = 0; i < (leftArr.length - 1); i++) {
    leftArr[i] = arr[k]
    ++k
  }
  rightArr[rightArr.length - 1] = Infinity
  leftArr[leftArr.length - 1] = Infinity
  let m = 0
  let n = 0
  for (let k = startLeft; k < stopRight; k++) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m]
      m++
    } else {
      arr[k] = rightArr[n]
      n++
    }
  }
  console.log('left arr', leftArr)
  console.log('right arr', rightArr)
}

// 快速排序
function qSort (list) {
  if (list.length === 0) {
    return []
  }
  var left = []
  var right = []
  var pivot = list[0]
  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      console.log(`移动${list[i]}到左边`)
      left.push(list[i])
    } else {
      console.log(`移动${list[i]}到右边`)
      right.push(list[i])
    }
  }
  return qSort(left).concat(pivot, qSort(right))
}

module.exports = CArray