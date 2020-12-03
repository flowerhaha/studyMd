//自执行函数在当前所在的作用域中不进行变量提升（自执行函数自己所形成的私有作用域照常进行）
function f2(){
    console.log("f2");
 }
 
  console.log(f1);// 报错 f1 is not defined;
 
 (function f1(){
    console.log(a);// undefined, 照常进行变量提升
    var a=3;
 })();