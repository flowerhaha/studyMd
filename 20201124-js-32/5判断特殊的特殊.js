//1）在条件判断语句中，如果条件成立，会把执行体当成私有作用域，再进行变量提升
console.log(fn);
if(1==1){
   console.log(fn);
   function fn(){
       console.log("ok");
   }
}
console.log(fn)

//2)在条件判断下，如果有function定义的变量，在这个function这个函数后面的更改变量的值，更改的都是私有变量。
var a=0;
if(true){
    console.log(a); // [Function: a]条件成立，声明又定义
    a=1;
    function a(){}
    a=21;  //特殊记忆：在判断语句中，如果出现function 在function后面再对此变量进行改值，改变的是私有的
    console.log(a);//21
}
console.log(a);  //1