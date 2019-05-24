function isNegZero(n){
  n = Number(n);

  return (n === 0) && (1/n === -Infinity);
}

console.log(isNegZero(-0)) // true
console.log(isNegZero(0)) // false