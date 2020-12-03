//如果只有一个call，就是让前面的函数执行，替换里面的this（简单的），如果超过一个，有多个call，不论多少个，都是让括号里面的第一个参数执行。
function fn1(){
    console.log(1);
}
function fn2(){
    console.log(2);
}
fn1.call(fn2);
fn1.call.call(fn2);
Function.prototype.call(fn1)
Function.prototype.call.call(fn1)


/*
分析】：
1)fn1.call(fn2) 这个没的说，就是让fn1执行，并且把fn1中的this替换成了fn2， 所以打印1
2)fn1.call.call(fn2);

    fn1.call.call(fn2);
    Function.prototype.call=function(obj){
    obj.$fn=this;//   obj=fn2  this=fn1.call;// call
    obj.$fn();   //   fn2.$fn=call;
                //   fn2.$fn();// call()
                //   =========第二次执行
                //   没有传参：obj=window this=fn2
                //    window.$fn=fn2;
                //    window.$fn();//fn2() 其实就是让fn2执行
    }

所以这个答案就是2
3）Function.prototype.call(fn1)
让Function.prototype 执行，一般情况下prototype都是对象，但是Function.prototype比较特殊是一个空函数，所以什么都没输出
4）Function.prototype.call.call(fn1)
    Function.prototype.call.call(fn1) //call
    Function.prototype.call=function(obj){
   obj.$fn=this;//   obj=fn1  this=Function.prototype.call;//call
   obj.$fn();   //   fn1.$fn=call;
                //   fn1.$fn();//call()
   //-----------------------第二次执行
   //      call() 
   //       没有传参
   //         obj=window; this=fn1
   //         obj.$fn=this;// fn1
    //      obj.$fn();//fn1();
    }
所以答案1
【总结】：如果以上你明白了通透了，恭喜你，如果你被折磨的体无完肤，那也不要紧，


记着下面的一个规律，一样可以成功战胜考题：
如果只有一个call，就是让前面的函数执行，替换里面的this（简单的），如果超过一个，有多个call，不论多少个，都是让括号里面的第一个参数执行。


*/