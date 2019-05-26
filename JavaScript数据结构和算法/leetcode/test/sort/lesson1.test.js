import bubbleSort from '../../code/sort/lesson1'

test('冒泡排序', () => {
  expect(bubbleSort([1, 3, 5, 7, 9, 2, 2, 4, 6, 8])).toEqual([1, 2, 2, 3, 4, 5, 6, 7, 8, 9])
})
