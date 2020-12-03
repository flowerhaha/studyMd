f=function(){
    return true;
};
g=function(){
    return false;
};
~function(){
 if(g()&&[]==![]){   //g()报错 新版本中函数只声明没有定义    
     f=function(){return false;};
     function g(){
         return true;
     }
 }
}();
console.log(f());
console.log(g());

//自执行函数在全局作用域下不进行变量提升
/*
题目分析：
1、在全局作用域中，变量提升：无
2、代码开始自上往下执行 f 就是window.f=function(){},  g就是window.g=function(){}
     自执行函数，形成私用作用域，变量提升：不管条件是否成立，判断语句里面的代码都会进行变量提升，function g 在新版本浏览器中只声明未定义。 接着走到if语句中，g（），此时的g只声明未定义，相当于undefined（），所以g（ ）会报类型错误，下面的代码都不会执行Uncaught TypeError: g is not a function
*/
//老版本中声明并且定义，答案为false、false