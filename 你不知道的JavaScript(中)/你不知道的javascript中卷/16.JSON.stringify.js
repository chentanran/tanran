var a = {
  b: 42,
  c: '42',
  d: [1,2,3]
}

console.log(JSON.stringify(a, ['d', 'b', 'c']));

console.log(JSON.stringify(a, function(k, v){
  if(k !== 'c'){
    return v;
  }
}))