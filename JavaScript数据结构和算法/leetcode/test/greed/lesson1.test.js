import stock from '../../code/greed/lesson1'

test('stock', () => {
  expect(stock([1, 3, 5, 7, 8])).toBe(7)
})

test('stock1', () => {
  expect(stock([1, 3, 2, 7, 6])).toBe(7)
})
