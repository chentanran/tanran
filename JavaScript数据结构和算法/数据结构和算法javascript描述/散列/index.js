function HashTable () {
  this.table = new Array(137)
  this.values = []
  this.simpleHash = simpleHash
  this.showDistor = showDistor
  this.betterHash = betterHash
  this.buildChains = buildChains
  this.put = put
}

function put (data) {
  // let pos = this.simpleHash(data)
  let pos = this.betterHash(data)
  // this.table[pos] = data
  // let index = 0
  // if (this.table[pos][index] === undefined) {
  //   this.table[pos][index + 1] = data
  //   ++index
  // } else {
  //   while (this.table[pos][index] !== undefined) {
  //     ++index
  //   }
  //   this.table[pos][index + 1] = data
  // }
  if (this.table[pos] === undefined) {
    this.table[pos] = key
    this.values[pos] = data
  } else {
    while (this.table[pos] !== undefined) {
      pos++
    }
    this.table[pos] = key
    this.values[pos] = data
  }
}

function get (key) {
  // let index = 0
  // let hash = this.betterHash(key)
  // if (this.table[pos][index] === key) {
  //   const data = this.table[pos][index + 1]
  //   index += 2
  //   return data
  // } else {
  //   while (this.table[pos][index] !== key) {
  //     index += 2
  //   }
  //   return this.table[pos][index + 1]
  // }
  let hash = -1
  hash = this.betterHash(key)
  if (hash > -1) {
    for (let i = hash; this.table[hash] !== undefined; i++) {
      if (this.table[hash] === key) {
        return this.values[hash]
      }
    }
  }
  return undefined
}

function simpleHash (data) {
  let total = 0
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}

function showDistor () {
  let n = 0
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i][0] != undefined) {
      console.log(i + ':' + this.table[i])
    }
  }
}

function betterHash (string) {
  const H = 37
  let total = 0
  for (let i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i)
  }
  total = total % this.table.length
  if (total < 0) {
    total += this.table.length - 1
  }
  return parseInt(total)
}

function buildChains () {
  for (let i = 0; i < this.table.length; i++) {
    this.table[i] = new Array()
  }
}

module.exports = HashTable