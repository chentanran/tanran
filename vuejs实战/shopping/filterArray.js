const getFilterArray = function(array){
  let arr = [];
  let json = {};

  for(let i = 0; i < array.length; i++) {
    let _self = array[i];
    if(!json[_self]){
      arr.push(_self);
      json[_self] = 1;
    }
  }

  return arr;
}

export default getFilterArray;
