
// function vomels(str){
//   var matches;

//   if(str) {
//     // 提取字母
//     matches = str.match(/[abcdefg]/g);
//     debugger
//     if(matches){
//       return matches;
//     }
//   }
// }

// 改造后的代码

// function vomels(str){
//   var matches;
//   // debugger
//   if(str && (matches = str.match(/[abcdetgw]/g))){
//     return matches;
//   }
// }

// console.log(vomels("hellow world"));

var abc = '12345'
var abcd = ''
for(let i = 0; i < abc.length; i++){
  abcd += abc[i] + '\n'
}

console.log(abcd)