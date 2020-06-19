import BinarySearchTree from "../binarySearchTree/binary";
import { defaultCompare, Compare } from "../utils";

// 在红黑树中，每个节点都遵循以下规则：
// (1) 顾名思义，每个节点不是红的就是黑的；
// (2) 树的根节点是黑的；
// (3) 所有叶节点都是黑的（用NULL引用表示的节点）；
// (4) 如果一个节点是红的，那么它的两个子节点都是黑的；
// (5) 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点；
// (6) 从给定的节点到它的后代节点（NULL叶节点）的所有路径包含相同数量的黑色节点。

const Colors = {

}

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
    this.color = Colors.RED
    this.parent = null
  }

  isRed() {
    return this.color === Colors.RED
  }

  // 插入节点
  insert(key) {
    if (this.root === null) {
      this.root = new RedBlackTree(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.inserNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new RedBlackTree(key)
        node.left.parent = node
        return node.left
      } else {
        return this.inserNode(node.left, key)
      }
    } else if (node.right === null) {
      node.right = new RedBlackTree(key)
      node.right.parent = node
      return node.right
    } else {
      return this.inserNode(node.right, key)
    }
  }

  // 左左旋转
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.right = node
    node.parent = tmp
  }

  // 右右旋转
  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.left = node
    node.parent = tmp
  }

  //
  fixTreeProperties(node) {
    while (node && node.parent && node.parent.isRed() && node.color !== Colors.BLACK)  {
      let parent = node.parent
      const grandParent = parent.parent
      // 父节点是左侧字节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right
        // 叔节点也是红色--只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // 节点是右侧字节点--左旋转
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent
          }
          // 节点是左侧字节点--右旋转
          this.rotationLL(grandParent)
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          node = parent
        }
      } else {
        // 父节点是右侧字节点
        const uncle = grandParent.left
        // 叔节点是红色--只需重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // 节点是左侧子节点--右旋转
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          }
          // 节点是右侧字节点--左旋转
          this.rotationRR(grandParent)
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          node = parent
        }
      }
    }
    this.root.color = Colors.BLACK
  }
}