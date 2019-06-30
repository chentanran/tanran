import ShortestRoute from '../../code/dp/lesson1'

test('ShortestRoute', () => {
  let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
  expect(ShortestRoute(arr, 3, 3)).toBe(2)
})
