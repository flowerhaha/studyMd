function fn(){
    console.log(this);
    return 100
}
let obj = {ss:10}
Function.prototype.myCall = function(context,...arg){
    let res = null;
    context.$fn = this;
    res = context.$fn(...arg);
    delete context.$fn;
    return res;
}
let res = fn.myCall(obj);
console.log(res);