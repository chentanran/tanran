import minPositiveInteger from '../../code/sort/lesson6'

test('最小正整数', () => {
  expect(minPositiveInteger([1, 2, 4, 5, 7])).toBe(3)
})

test('最小正整数2', () => {
  expect(minPositiveInteger([2, 4, 5, 7])).toBe(1)
})

test('最小正整数3', () => {
  expect(minPositiveInteger([-1, -2, -4, -5, -7])).toBe(1)
})
