import sort, { NodeList } from '../../code/chain/lesson1'

test('sort', () => {
  let head = new NodeList([4, 1, 4, 3, 5, 7, 8, 4, 3, 3, 1])
  sort(head)
  let res = []
  let next = head
  while (next) {
    res.push(next.val)
    next = next.next
  }
  expect(res).toEqual([1, 1, 3, 3, 3, 4, 4, 4, 5, 7, 8])
})
