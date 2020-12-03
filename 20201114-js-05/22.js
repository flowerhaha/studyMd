// 函数
function fn(x,y){
    return x+y;
}
console.log(fn(1,2));

// 自执行函数
(function(x,y){
    return x+y;
})(2,2)

// 箭头函数
var fn=function(x,y){
    return x+y;
}
fn(1,2);

var fn=(x,y)=>{
    return x+y
}
fn(1,2);

var fn=x=>x+1;
console.log(fn(1));

var fn=(...arg)=>{
    console.log(arg);//获取实参的类数组
}
fn(1,2);