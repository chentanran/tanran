class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = new Heap(primes)
  }
  getAll () {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for (; k < l; k++) {
        if (!primes.find(arr[k])) {
          break
        }
      }
      // k===l 有两种情况, 一种当前数没有质因数, 一种所有质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  // 计算指定正整数n的质因数
  static getPrimes (n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = []
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

class Heap {
  constructor (arr) {
    this.data = arr
    this.max = arr.length
    this.sort()
  }
  // 构建最大堆
  static maxHeapify (Arr, i, size) {
    // 左节点(索引)
    let l = i * 2 + 1
    // 右节点索引
    let r = i * 2 + 2
    let largest = i
    // 父节点i 和 左节点做比较取最大
    if (l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    // 右节点和最大值比较
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeapify(Arr, largest, size)
    }
  }
  static swap (arr, i, largest) {
    if (i === largest) {
      return
    }
    let c = arr[i]
    arr[i] = arr[largest]
    arr[largest] = c
  }

  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) {
      return iArr
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      return iArr
    }
  }

  find (val, i = 0) {
    let arr = this.data
    if (val > arr[i] || i > this.max) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }
}

export default Ugly
export {
  Heap
}
