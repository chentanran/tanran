import GrayCode from '../../code/array/lesson4'

test('GrayCode: 输入2 输出[0, 1, 2, 3]', () => {
  expect(GrayCode(2)).toEqual([0, 1, 3, 2])
})

test('GrayCode: 输入3 输出[0, 1, 2, 3, 4, 5, 6, 7, 8]', () => {
  expect(GrayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4])
})
