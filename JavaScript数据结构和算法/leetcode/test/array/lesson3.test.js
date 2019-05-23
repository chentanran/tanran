import flower from '../../code/array/lesson3'

test('flower: [1,0,0,0,1], n = 1 输出 true ', () => {
  expect(flower([0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], 5)).toBe(true)
})
