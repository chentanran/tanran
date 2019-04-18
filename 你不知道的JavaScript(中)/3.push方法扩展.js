Array.prototype.pushs = function(item){
  this[this.length] = item;
}

var a = [1,2,3,4,5,6];

a.pushs(7);
a.pushs(7);
a.pushs(7);
a.pushs(7);

console.log(a)