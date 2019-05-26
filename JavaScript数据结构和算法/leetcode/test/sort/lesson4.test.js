import oddEvenSort from '../../code/sort/lesson4'

test('奇偶排序', () => {
  expect(oddEvenSort([2, 4, 5, 7, 9, 8, 3, 6])).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
})
