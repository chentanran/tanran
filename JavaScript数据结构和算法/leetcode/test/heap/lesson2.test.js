import Ugly from '../../code/heap/lesson2'

test('Ugly:1', () => {
  expect(Ugly.getPrimes(6)).toEqual([2, 3])
  expect(Ugly.getPrimes(10)).toEqual([2, 5])
})
