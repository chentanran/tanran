const HashTable = require('./index')

let someNames = ['david', 'wahha', 'shuangwaiwai', 'daletou', 'tianshijiangling', 'liubei']

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getStuData (arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = ''
    for (let j = 1; j <= 9; j++) {
      num += Math.floor(Math.random() * 10)
    }
    num += getRandomInt(50, 100)
    arr[i] = num
  }
}

// const numStudents = 10
// const arrSize = 97
// const idLen = 9

// let students = new Array(numStudents)
// getStuData(students)

// for (let i = 0; i < students.length; i++) {

// }

let hTabel = new HashTable()
hTabel.buildChains()

for (let i = 0; i < someNames.length; i++) {
  hTabel.put(someNames[i])
  // hTabel.put(students[i])
}

hTabel.showDistor()
