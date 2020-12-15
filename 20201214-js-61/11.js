function fn(a,b,c,d){
    console.log(this);
    console.log(a,b,c,d)
    return 100;
}
let obj = {name: "li"};
Function.prototype.myBind = function(context,...arg1){
    // context == null


    let _this = this;
    return function(...arg2){
       return _this.apply(context,[...arg1,...arg2]);
    }
}
let res = fn.bind(obj,1,2);
let res1 = new res();
console.log(res(3,4));
console.log(res1 instanceof res);
console.log(res1 instanceof fn);

