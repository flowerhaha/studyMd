Function.prototype.myCall = function(obj,...arg){
    obj = obj || window;
    //this()  fn();
    // 此时this指的是fn,要想改变this，变成obj
    //console.log(arg); //[1,2];   ...arg  剩余运算符
    // console.log(...arg)  //1 2       展开了
    var res = null;
    obj.$fn = this;  //$fn可以随便命名


    res = obj.$fn(...arg); //此时this就是obj
// function fn(x,y){
//     console.log(this);
//     return x+y;
// }



    delete obj.$fn;
    console.log("ooo", obj);
    return res;
}
var obj = {"name":"li"};
function fn(x,y){
    console.log(this);
    return x+y;
}

var res = fn.myCall(obj,1,2);
console.log('222', obj);