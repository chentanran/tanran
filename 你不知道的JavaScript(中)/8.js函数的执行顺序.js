doA(function(){
  doB()

  doC(function(){
    doD()
  })

  doE()
})

doF()

function doA(callback){
  console.log('a')
  callback()
}

function doB() {
  console.log('b')
}

function doC(callback) {
  console.log('c')
  callback()
}

function doD() {
  console.log('D')
}

function doE() {
  console.log('E')
}

function doF(){
  console.log('F')
}