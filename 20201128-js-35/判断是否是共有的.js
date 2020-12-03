
function Fn(name,age){
    this.name = name;
    this.age = age;
}
// 共有
Fn.prototype.getX = function(){

}
var f1 = new Fn("zzz",12);
// function hasOwnPubProperty(obj,attr){
//     if(attr in obj){
//         if(!obj.hasOwnProperty(attr)){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     return false;
// }

// 简化
// function hasOwnPubProperty(obj,attr){
//     if(attr in obj){
//         if(!obj.hasOwnProperty(attr)){
//             return true;
//         }
//     }
//     return false;
// }


// 简化
// function hasOwnPubProperty(obj,attr){
//     if(attr in obj && !obj.hasOwnProperty(attr)){
//         return true;
//     }
//     return false;
// }

function hasOwnPubProperty(obj,attr){
   return  attr in obj && !obj.hasOwnProperty(attr)?true:false;
}
console.log(hasOwnPubProperty(f1,"name")); //false
console.log(hasOwnPubProperty(f1,"age")); //false
console.log(hasOwnPubProperty(f1,"getX")); //true