var a=9;
function fn(){
  a=0;
  return function(b){
     return b+a++;
  }
}
var f=fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);


/*
全局：
var a=9==>0===>1===>0===>1===>2
function fn
var f

代码自上而下执行：
var a=9;
f = 函数b
a=0,
f(5)==> b=5,

*/