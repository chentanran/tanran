import { defaultCompare, Compare } from "../utils";

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

class AVtREE extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  // 计算高度
  getNodeheight(node) {
    if (node === null) {
      return -1
    }
    return Math.max(
      this.getNodeheight(node.left),
      this.getNodeheight(node.right)
    ) + 1
  }

  // 计算节点的平衡因子
  getBalanceFactor(node) {
    const heightDifference = this.getNodeheight(node.left) - this.getNodeheight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }
  //
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }
  //
  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }
  //
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  // 
  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  // 添加
  insert(key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode(node, key) {
    if (node === null) {
      return new Node(key)
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node
    }
    // 如果需要 将tree进行平衡操作
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node)
      } else {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node)
      } else {
        return this.rotationRL(node)
      }
    }
    return node
  }

  // 移除
  removeNode(node, key) {
    node = super.removeNode(node, key)
    if (node === null) {
      return node
    }
    // 检测tree平衡
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left)
      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHLY_UNBALANCED_LEFT) {
        return this.rotationLL(node)
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right)
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node.right)
      }
    }
    return node
  }
}