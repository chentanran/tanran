function Node (data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
  this.count = 1
}

function show () {
  return this.data
}

function BST () {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder // 中序遍历
  this.preOrder = preOrder // 先序遍历
  this.postOrder = postOrder // 后序遍历
  this.getMin = getMin // 获取最小值
  this.getMax = getMax // 获取最大值
  this.find = find // 查找指定值
  this.remove = remove // 删除节点
  this.update = update
  this.prArray = prArray
  this.genArray = genArray
}

function insert (data) {
  let n = new Node(data, null, null)
  if (this.root === null) {
    this.root = n
  } else {
    let current = this.root
    let parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current === null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current === null) {
          parent.right = n
          break
        }
      }
    }
  }
}
// 更新
function update(data) {
  let grade = this.find(data)
  grade.count++
  return grade
}
//
function prArray (arr) {
  console.log(arr[0].toString() + ' ')
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i].toString() + ' ')
    if (i % 10 === 0) {
      console.log('\n')
    }
  }
}
//
function genArray (length) {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 101)
  }
  return arr
}
// 中序
function inOrder (node) {
  if (!(node === null)) {
    inOrder(node.left)
    console.log(node.show() + '--')
    inOrder(node.right)
  }
}
// 先序
function preOrder (node) {
  if (!(node === null)) {
    console.log(node.show() + ' ')
    preOrder(node.left)
    preOrder(node.right)
  }
}
// 后序
function postOrder (node) {
  if (!(node === null)) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show() + '||')
  }
}

// 查找最小值
function getMin () {
  let current = this.root
  while (!(current.left === null)) {
    current = current.left
  }
  return current.data
}

// 获取最大值
function getMax () {
  let current = this.root
  while (!(current.right === null)) {
    current = current.right
  }
  return current.data
}

// 查找给定值
function find (data) {
  let current = this.root
  while (current !== null) {
    if (current.data === data) {
      return current
    } else if (data < current.data) {
      current = current.left
    } else {
      current = current.right
    }
  }
}

// 移除
function remove (data) {
  root = removeNode(this.root, data)
  return root
}

// 移除节点
function removeNode (node, data) {
  if (node === null) {
    return null
  }
  if (data === node.data) {
    // 没有子节点的节点
    if (node.left === null && node.right === null) {
      return null
    }
    // 没有左子节点的节点
    if (node.left === null) {
      return node.right
    }
    // 没有右子节点的节点
    if (node.right === null) {
      return node.left
    }
    // 有两个子节点的节点
    let tempNode = getSmallest(node.right)
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)
    return node
  } else if (data < node.data) {
    node.left = removeNode(node.left, data)
    return node
  } else {
    node.right = removeNode(node.right, data)
    return node
  }
}

module.exports = BST