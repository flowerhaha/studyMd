function fn(a,b,c,d){
    console.log(this);
    console.log(a,b,c,d);
    return 100;
}
let obj = {ss:100};
Function.prototype.myBind = function(context,...arg1){
    //fn ==> this 
    let _this = this;
    return function(...arg2){         //bind返回的是一个函数
        let arg = [...arg1,...arg2];
       return  _this.call(context,...arg);
    }
}
let res = fn.myBind(obj,1,2);
res(3,4);  //当fn中有返回值的时候res()也有返回值即function(){ _this.call(context);}也有返回值，即call执行的时候就有fn的返回值