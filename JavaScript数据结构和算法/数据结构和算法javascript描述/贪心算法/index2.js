function Ksack (values, weights, capacity) {
  let load = 0
  let i = 0
  let w = 0
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity - load)) {
      w += values[i]
      load += weights[i]
    } else {
      let r = (capacity - load) / weights[i]
      w += r * values[i]
      load += weights[i]
    }
    ++i
  }
  return w
}

let items = ['A', 'B', 'C', 'D', 'E']
let values = [50, 140, 60, 60]
let weights = [5, 20, 10, 12]
let capacity = 30

console.log(Ksack(values, weights, capacity))