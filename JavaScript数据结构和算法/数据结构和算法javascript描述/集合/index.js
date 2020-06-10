function Set () {
  this.dataStore = []
  this.add = add
  this.remove = remove
  this.size = size
  this.union = union // 并集
  this.contains = contains // 判断是否存在
  this.intersect = intersect // 交集
  this.subset = subset // 子集
  this.difference = difference // 包含第一个集合，但不包含第二个集合
  this.show = show
}

function add (data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data)
    return true
  } else {
    return false
  }
}

function remove (data) {
  const pos = this.dataStore.indexOf(data)
  if (pos > -1) {
    this.dataStore.splice(pos, 1)
    return true
  } else {
    return false
  }
}

function show () {
  return this.dataStore
}

// 
function union (set) {
  let temSet = new Set()
  for (let i = 0; i < this.dataStore.length; i++) {
    temSet.add(this.dataStore[i])
  }
  for (let i = 0; i < set.dataStore.length; i++) {
    if (!temSet.contains(set.dataStore[i])) {
      temSet.dataStore.push(set.dataStore[i])
    }
  }
  return temSet
}

function intersect (set) {
  const temSet = new Set()
  for (let i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      temSet.add(this.dataStore[i])
    }
  }
  return temSet
}

function subset (set) {
  if (this.size() > set.size()) {
    return false
  } else {
    for (let i of this.dataStore) {
      if (!set.contains(i)) {
        return false
      }
    }
  }
  return true
}

function difference (set) {
  let tempSet = new Set()
  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i])
    }
  }
  return tempSet
}

function size () {
  return this.dataStore.length
}

// 判断元素是是否存在当前数据
function contains (data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true
  } else {
    return false
  }
}

module.exports = Set