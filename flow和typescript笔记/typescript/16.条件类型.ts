declare function f<T extends boolean>(x: T): T extends true ? string : number

const x = f(Math.random() < 0.5)

const y = f(true)
const z = f(false)

console.log(x)