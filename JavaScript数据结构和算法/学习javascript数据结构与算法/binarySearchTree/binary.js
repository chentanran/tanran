import { Compare, defaultCompare } from '../utils'
import { Node } from './index'

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn // 用来比较节点的值
    this.root = null // node类型的根节点
  }
  // 向树中插入一个新键
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  // t添加到根节点之外的节点
  inserNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.inserNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.inserNode(node.right, key)
      }
    }
  }

  // 中序排序
  inOrderTraverse(callbace) {
    this.inOrderTraverseNode(this.root, callbace)
  }

  //
  inOrderTraverseNode(node, callbace) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callbace)
      callbace(node.key)
      this.inOrderTraverseNode(node.right, callbace)
    }
  }

  // 寻找最小键
  min () {
    return this.minNode(this.root)
  }

  minNode (node) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  max () {
    return this.maxNode(this.root)
  }

  maxNode (node) {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  // 搜索key
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode (node, key) {
    if (node === null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 移除
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      //
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}