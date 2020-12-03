Function.prototype.myCall=function(obj,...arg){
    obj = obj || window;
    var res=null;
    console.log(...arg);
    obj.$fn=this;
    res= obj.$fn(...arg);
    delete obj.$fn;
    return res;
}
function fn(x,y){
    console.log(this);
   return x+y;
}
var obj={name:"li",fn:fn}
var res=fn.myCall(obj,1,2);
// fn1.myCall(obj,1,2)
/* 
1、 让fn 这个函数执行
2、 改变fn这个函数里面的this指向----obj

*/