/*
变量提升的特殊性：
    判断语句：不论条件是否成立，都会进行变量提升
    var 还是之前理解：只声明不定义
    function 在老版本浏览器中：声明+定义
            在新版本浏览器中：只声明不定义
*/
// 变量提升阶段：var a
// 代码自上而下执行：
console.log(a); //undefined；
if(1==2){
    var a=12;
}
console.log(a);  //undefined

////
console.log(fn);//undefined    在新版本浏览器中，判断条件中的function相当于只是声明（跟var一样），所以undefined
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn);//undefined  条件不成立，只声明了，没赋值，（新版本浏览器）

/////
console.log(fn()); //fn is not a function   报错之后不再往下执行
console.log(fn);
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn);

///
console.log(a); //undefined
if(a in window){
    var a=100;
}
console.log(a);  //100