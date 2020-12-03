/*
如果变量名字重复该如何
在变量提升阶段，看到第一行var num ，会声明一个变量num，此时看到第二行还有一个就不用再声明了
*/
var num=2;
var num=3;
console.log(num);

//对于function的在变量提升阶段是声明和定义一起完成的，如果遇到重复声明定义的，会进行重新赋值

console.log(fn)
function fn(){
   console.log(1);
}
function fn(){
   console.log(2);
}
function fn(){
   console.log(3);
}


console.log(num);
var num = 1;
console.log(num);// 1
var num = 2;
console.log(num);
fn();// 4
function fn(){
    console.log(1);
}
function fn(){
    console.log(2);   
}
fn();// 4
function fn(){
    console.log(3);
}
fn=100;
function fn(){
    console.log(4);   
}
fn();// 报错