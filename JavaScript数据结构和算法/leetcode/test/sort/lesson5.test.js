import kMax from '../../code/sort/lesson5'

test('寻找数组中第k个最大值', () => {
  expect(kMax([1, 4, 7, 9, 3, 7, 9, 2, 10], 4)).toBe(7)
})

test('寻找数组中第k个最大值2', () => {
  expect(kMax([66, 44, 77, 85, 23, 15, 67, 98, 34, 26, 12, 78, 34], 4)).toBe(77)
})
