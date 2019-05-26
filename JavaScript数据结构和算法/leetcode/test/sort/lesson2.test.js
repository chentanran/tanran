import selectionSort from '../../code/sort/lesson2'

test('选择排序', () => {
  expect(selectionSort([2, 1, 5, 7, 4, 5, 9, 2, 1])).toEqual([1, 1, 2, 2, 4, 5, 5, 7, 9])
})
