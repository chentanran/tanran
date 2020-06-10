const Set = require('./index')

const names = new Set()
names.add('www')
names.add('eee')
names.add('rrr')
names.add('ttt')
names.add('yyy')
names.add('uuu')

const wahaha = new Set()
wahaha.add('www')
wahaha.add('iii')
wahaha.add('lll')

console.log(names.show())

// names.remove('yyy')
// console.log(names.show())

const unionTemp = names.union(wahaha)
// console.log(newTemp)

const interTemp = names.intersect(wahaha)
// console.log(interTemp)

const subTemp = wahaha.subset(names)
// console.log(subTemp)