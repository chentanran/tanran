const max = BigInt(Number.MAX_SAFE_INTEGER)

const max1 = max + BigInt(1)
const max2 = max + BigInt(2)

console.log(max1 === max2)

let value: unknown