import Tree, { Node } from '../../code/btree/lesson2'

test('tree', () => {
  let root = new Tree([2, 1, 3])
  expect(Tree.walk(root)).toBe(true)
})

test('tree:2', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(3)
  expect(Tree.walk(root)).toBe(false)
})
