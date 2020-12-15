//bind封装
function fn(a,b,c,d){
    console.log(this);
    console.log(a,b,c,d);
    return 100
}
let obj = {ss:100};
Function.prototype.myBind = function(context,...arg1){
    let _this = this;
    return function(...arg2){
       return  _this.call(context,...arg1,...arg2);
    }
}
let res = fn.myBind(obj,1,2); //实参用arg1接收
console.log(res(3,4));  //用形参arg2接收



//bind执行会返回一个新的函数，以后执行这个新函数的时候，在新函数内部会让fn执行；

//bind函数执行形成不销毁的作用域，可以保存里边的变量不受外界干扰，还可以让变量一直存在，这样fn和context就一直被保存下来了
//当以后bind返回的函数执行的时候就可以拿到fn和context
//所以bind返回的函数里做的就是call做的事

//当前这种利用闭包的机制编程思想就是柯理化函数编程思想

