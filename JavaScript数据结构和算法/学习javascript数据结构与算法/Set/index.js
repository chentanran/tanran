class Set {
  constructor () {
    this.items = {}
  }
  
  // 是否存在
  has (element) {
    // return element in items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  // 添加
  add (element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  // 删除
  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  // 移除所有
  clear () {
    this.items = {}
  }

  // 元素数量
  size () {
    return Object.keys(this.items).length
  }

  // 获取value
  values () {
    return Object.values(this.items)
  }

  // 并集
  union (otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  // 交集
  intersection (otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }

  // 子集
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().event(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}

const set = new Set()
set.add(1)
set.add(2)
console.log(set)
console.log(set.size())
console.log(set.values())
console.log(set.delete(1))