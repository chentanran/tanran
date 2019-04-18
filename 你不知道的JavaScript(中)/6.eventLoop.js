var add = function(){
  console.log('添加')
}

var deletes = function(){
  console.log('删除')
}

var eventLoop = [add, deletes];
var event;

while(true) {
  if(eventLoop.length > 0){
    event = eventLoop.shift();
    console.log(event)
    try{
      event()
    } catch(err){
      throw new Error(err)
    }
  } else {
    break;
  }
}