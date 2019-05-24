
foo: for(var i = 0; i < 4; i++) {
  for(var j = 0; j < 5; j++) {
    // if(j == i){
    //   continue foo;
    // }
    // debugger
    if((j * i) % 2 == 1){
      continue;
    }

    console.log(i, j)
  }
}