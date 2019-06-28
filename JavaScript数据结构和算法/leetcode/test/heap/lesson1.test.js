import Heap from '../../code/heap/lesson1'

test('heap:str', () => {
  let heap = new Heap('ababccc')
  expect(heap.toString()).toMatch(/cccaabb|cccbbaa/)
})
