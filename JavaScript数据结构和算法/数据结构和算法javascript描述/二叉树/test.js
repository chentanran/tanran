const BST = require('./index')

const nums = new BST()

nums.insert(23)
nums.insert(24)
nums.insert(25)
nums.insert(26)
nums.insert(14)
nums.insert(15)
nums.insert(16)

// nums.inOrder(nums.root)
// nums.preOrder(nums.root)
// nums.postOrder(nums.root)
// console.log(nums.getMin(nums.root))
// console.log(nums.getMax(nums.root))

// console.log(nums.find(23))
console.log(nums.remove(25))
console.log(nums.inOrder(nums.root))