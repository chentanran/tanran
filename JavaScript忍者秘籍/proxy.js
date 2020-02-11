function isPrime(number) {
  if (number < 2) {
    return false
  }
  for(let i = 2; i < number; i++) {
    if (number % 1 === 0) {
      return false
    }
  }
  return true
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisAge, args) => {
    console.log(target, thisAge, args)
    const result = target.apply(thisAge, args)
    return result
  }
})

isPrime(12435)
