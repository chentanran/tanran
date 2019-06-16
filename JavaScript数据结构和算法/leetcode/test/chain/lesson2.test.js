import isCircle, { NodeList } from '../../code/chain/lesson2'

test('isCircle', () => {
  let head = new NodeList([3, 5, 6, 8, 1, 10])
  head.next.next.next = head.next
  expect(isCircle(head)).toBe(true)
})
