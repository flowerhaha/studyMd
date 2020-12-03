let a=10,
b=10;
let fn=function(){
    console.log(a);// 函数执行，形成一个私有作用域，这里没变量提升，但是有自我检测机制，知道用let声明
    let a=b=20;    // 了一个变量，进行了记录，不存在变量提升，不能在let 之前进行获取变量，所以报错：a is not defined
    console.log(a,b);
};
fn();
console.log(a,b);


let a=10,
b=10;
let fn=function(){
    //a 是这里的私有变量，在私有作用域中没有b这个变量，向上级查找，b是全局变量，此时更改的也是全局变量b
    let a=b=20;
    console.log(a,b);// 20 20
};
fn();
console.log(a,b);// 10 20

/*
全局作用域中：
1变量提升：
var a =12
var b =13
var c =14
function fn=AAAFFF111
fn(a) ; fn(12)

私有作用域 AAAFFF222
1、形参赋值 a=12; a是私有的 
2、变量提升 :var b   b私有的
3、代码自上而下执行：
console.log（a,b,c); //12 undefined 14
b=c=a=20;  //b和a都是私有的，改值的时候改的就是自己私有的，c是window全局作用域的，改的是全局的c=20


*/
var a=12,b=13,c=14;
function fn(a){
   console.log(a,b,c); //12 undefined 14
   var b=c=a=20;
   console.log(a,b,c);
}
fn(a);
console.log(a,b,c); //12 13 20
