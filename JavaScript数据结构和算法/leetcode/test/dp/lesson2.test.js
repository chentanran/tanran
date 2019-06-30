import minimumCharge from '../../code/dp/lesson2'

test('minimumCharge', () => {
  let arr = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500]
  ]
  expect(minimumCharge(arr, 0, 2, 1)).toBe(200)
})
