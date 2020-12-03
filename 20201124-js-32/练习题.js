function fn(){
    n=3;
 }
 var n=2;
 fn();
 console.log(n);  //3

 function fn(){
    console.log(n);// 2
  }
  var n=2;
  fn();
  console.log(n); //2

//此题参考变量提升3图片
  console.log(fn(1,2));   // 依然是3
  function fn(n,m){
      return n+m;
   }
  console.log(fn(1,2)); //3


console.log(a);//undefined:不管条件是否成立，都会进行变量提升，var a;
if(1==2){
  var a=12;// 条件不成立，所以进不来
}
console.log(a);//undefined


console.log(fn); // 在新版本浏览器中，判断条件中的function相当于只是声明（跟var一样），所以undefined
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn); //undefined


console.log(a);
if(a in window){
    var a=100;
}
console.log(a);


console.log(fn()); //fn is not a function   报错之后不再往下执行
console.log(fn);
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn);

// 360面试题
f=function(){
    return true;
};
g=function(){
    return false;
};
~function(){
 if(g()&&[]==![]){
     f=function(){return false;};
     function g(){
         return true;
     }
 }
}();
console.log(f());
console.log(g());
/*解析： 
1、无变量提升，因为自执行函数在此作用域中不进行变量提升。
2、代码自上而下执行：给全局window设置了f和g这两个属性，并进行赋值，f 就是window.f=function(){},  g就是window.g=function(){}
3、自执行函数内部查看是否有变量提升,形成私有作用域。变量提升：不管条件是否成立，判断语句里面的代码都会进行变量提升，function g在新浏览器中，函数只声明不定义。
4、接着走判断语句：g()==>报错  此时的g只声明未定义，相当于undefined(),所以g（ ）会报类型错误，下面的代码都不会执行。Uncaught TypeError: g is not a function 


在老版本浏览器中，函数既声明又定义（仅限判断语句中）
从第三步开始发生变化，function g既声明又定义了，g() 为true,[]==![]为true,走if判断中的内容，f重新被赋值，返回false，函数执行体function g(){return true;}已经被声明提前了，就直接跳过这一块了。
console.log(f());  //false
console.log(g());  //false

*/

//条件判断下的变量提升到底有多坑
// 1）在条件判断语句中，如果条件成立，会把执行体当成私有作用域，再进行变量提升
console.log(fn);  //undefined
if(1==1){
   console.log(fn); //打印函数题本身 [Function: fn]
   function fn(){
       console.log("ok");
   }
}
console.log(fn); //打印函数题本身[Function: fn]

// 2)在条件判断下，如果有function定义的变量，在这个function这个函数后面的更改变量的值，更改的都是私有变量。
var a=0;
if(true){
    console.log(a); //[Function: a]  //在条件判断语句中，如果条件成立，会把执行体当成私有作用域，再进行变量提升
    a=1;
    console.log(a); //1
    function a(){}
    a=21;
    console.log(a); //21
}
console.log(a); //1


console.log(fn);  //undefined
console.log(fn(1,2));  //报错 fn is not a function  函数就不往下执行
var fn=function (n,m){
    return n+m;
 }
console.log(fn(3,4));


sum(); //2
fn(); //报错
var fn=function(){
    console.log(1);
};

function sum(){
    console.log(2);
}

fn();
sum();


console.log(obj.f1); //TypeError: Cannot read property 'f1' of undefined
var obj={
    f1:function(){
       console.log(1)
    }
}


function fn(){
    console.log(f2); //[Function: f2]
    return function f1(){
    }
    function f2(){
      console.log("f2")
    }
  }
  fn();


  console.log(fn)  // 函数（变量提升阶段声明和定义一同完成） var fn 的时候只声明，但是已经有这个变量了。
function fn(){    // 跳过此阶段
    console.log(1)
}
var fn=2;       // 代码走到这里的时候，重新赋值 fn=2
console.log(fn) //2


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

