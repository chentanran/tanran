import Tree from '../../code/btree/lesson1'

test('tree', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  console.log(root)
  expect(Tree.isSymmetry(root)).toBe(true)
})
