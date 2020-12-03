var num="1"
if(num<0){
    alert("负数")
} else if(num==0) {
    alert(0)
} else if(num>0 && num<5){
    alert("ksjdisdj")
}else{
    alert("hahah")
}

if(num>0){
    if(num<5){
        alert("hhhh")
    }
}

if(true){
    alert("shashahs")
}

/*
逻辑运算符号：
表示且：&& 也就是符号左右两边的表达式都必须成立
表示或：|| 只要这个符号左右两边只要有一个成立就可以进入执行体里面
• 如果是单独的一个值，先把它转换成布尔类型，如果是真，条件 成立，如果假，条件不成立。

回忆其它值转换为布尔值，只有以下几种情况是false：
+ 0
+ “”
+ null
+ undefined
+ NaN
*/

/*
三元运算符：
条件？成立的执行语句:不成立执行语句
注意：如果执行体里面有多条语句，用小括号包起来，并且语句和语句之间用逗号隔开
*/
var num=5;
num>=5?num++:num--;
console.log(num);

// 多条语句
num>=5?(num++,console.log(num)):num--;

if(num>5){
    num+=2;
}
// 如果你只有一个if判断即可，我们改写三元运算符的时候，需要用一下占位符
num>5?num+=2:void 0;
num>5?num+=2:null;
num>5?num+=2:undefined;