import cardGroup from '../../code/array/lesson2'

test('cardGroup: [1,2,3,4,4,3,2,1]', () => {
  expect(cardGroup([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})
