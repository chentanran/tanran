import maxSpace from '../../code/sort/lesson3'

test('最大间距', () => {
  expect(maxSpace([1, 4, 9, 11, 45, 3, 6])).toBe(34)
})

test('最大间距2', () => {
  expect(maxSpace([13, 16, 19, 1])).toBe(12)
})
