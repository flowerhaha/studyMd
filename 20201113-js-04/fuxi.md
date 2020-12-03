## Number({});
//{}.toString();===>"[object object]""===>Number("[object object]");===>NaN
如果是字符串，里面包含了非有效数字，转换结果一定是NaN
Number("1we12");  //NaN
如果是引用数据类型，先隐式调用toString,再用Number

## string
把字符用单引号或者双引号包起来的
## 其他数据类型转为字符串的方法
+ 数据.toString
+ String(数据) 
String({}) ==> "[Object Object]"
null和undefined转换为字符串的结果是“null”和"undefined",但是null和undefined不能直接用第一种方法，会报语法错误
String([])==> ""
String(null)==>"null"
String(undefined)==>"undefined"

## 加减乘除
减、乘、除都是先转化成number数据类型再计算
6-[] ==>NaN
加法的话：如果里面遇到字符串，就变成了字符拼接，（除了i++，和++i）;
"6"+undefined;  //"6undefined"
如果加法中出现了引用数据类型，会把这个引用数据类型先调用toString这个方法
、、、

6+{};
//===>{}.toString();===>"[Object Object]";===>6+"[Object Object]"==>"6[Object Object]"

、、、

### 腾讯面试题
、、、

let result = 10+false+undefined+[]+'Tencent'+null+true+{}
console.log(result);

//===>10+Number(false);//10+0=10
//===>10+undefined; //NaN
//===>NaN+[];//==>NaN+[].toString();//==>NaN+"";//"NaN"
//加法只要碰到字符串就是字符串的拼接
//"NaNTencentnulltrue[Object Object]"

、、、
### 把其他数据类型转为布尔的方法：
+ Boolean
+ !
+ !!
除了以下五种是false，剩下的都是true
- 0
- NaN
- ""
- null
- undefined

、、、

!!0; //false
![]; //false  //[]不是上面的5种中的，是true，再取反就是false

、、、

## 对象
由属性名和属性值组成，并且用大括号包起来，如果是多组，用逗号隔开
、、、

var obj={"name":"li",job:["ui","qianduan"],0:100};
、、、
### 获取
如果没有属性名，去获取属性值,就是undefined
属性名一般就是 字符串或者是数字，但是属性值可以是任意数据类型
obj.name
obj["name"]
obj[100]
obj[name];//undefined    //obj里面没有对应的属性名，获取其值的时候就是undefined
、、、

、、、

## 引用数据类型和基本数据类型有什么区别
基本数据类型按值操作
引用数据类型是空间地址   {}=={}  false
、、、

var a=3;
var b=a;
console.log(b); //3

、、、
对象和对象进行比较的时候：空间地址，如果空间地址相同就是true，不同就是false

### 不同的数据类型在进行比较的时候，除了以下的，剩下的都是先转为数字再比较
1、对象和字符串进行比较的时候，把对象转为字符串，再进行比较；
2、null和undefined永远不等于任何一种数据类型，但是null==undefined(true);null===undefined(false);
3、NaN永远不等于任何一种数据类型

### 思考题
、、、

1 == true
1 == false
2 == true

[]==true  //都转为数字类型，[]转为数字类型，先隐式调用toString的方法，[].toString()==>"" ,Number("")为0，true为1；
![]==true  //先算左边，[]转为布尔值，为true，![]为false  //false

[]==[]  //false
var ary1=[1,2];
var ary2=ary1;
ary1==ary2;  //true

![]==[]
//首先看左边，[]转换为布尔是true，!true为false，布尔和对象进行比较，都先转为Number类型进行比较，false是0，[]是0.。。所以是true


//答案
1==true  
1==false  
2==true 

[]==true  ;//false
![]==true;// ===>先计算左边：![];转为布尔并取反（false）===》false==true;//false

[]==[] ; //false
var ary1=[1,2];
var ary2=ary1;

ary1==ary2;// ture;
、、、

## 判断
if else/if else if else

switch 里面的比较是绝对比较

### for 重复去做一件事的时候
+ 1、定义初始值
+ 2、判断条件
+ 3、如果判断条件符合，走执行体里面的代码
+ 4、累计操作
+ 5、再判断，如果符合继续走执行体，如果不符合跳出

### [两个关键词]
+ continue; //结束本轮循环，进入到下一轮
+ break; //结束整个循环


###  for in 循环：遍历对象中的属性名和属性值
、、、

for(var key in obj){
    //console.log(key);  //获取属性名
   var value=obj[key];
   console.log("key:"+key+"value:"+value);
}

、、、

## while 循环：只要条件成立就会执行循环体里面的语句
、、、

var num=2;
while(num>3){
    console.log(num);
}

、、、

## do while 循环：先执行do里面的
不管条件是否成立，先执行循环体里面的语句，再判断
、、、

var num=2;
do{
    console.log(num); //先执行
}while(num>3);

、、、


## 函数  （闭包），函数里面的变量，外界访问不到。。要想被访问到要用到return
代表某种功能；
函数是一个引用数据类型，在存储的时候，开辟一个堆内存，把函数里面的代码当成字符进行存储（空间地址），然后会把空间地址给函数名
+ 形参：形式上的参数
+ 实参：真实传递的参数
+ 不确定传递的参数个数：arguments(类数组)，有索引，有长度
    - arguments.length;//真实传递的参数个数
    - arguments[0];//具体的参数
    - arguments.callee;//当前函数本身
+ 函数的返回值：在函数里面，return多少，函数执行的结果就是多少，如果不写return返回值是undefined；
+ 函数在执行的时候，会形成一个私有作用域，保护里面的私有变量不受外界干扰，这种机制理解为闭包
## 接收参数的方式：
+ arguments
+ 形参


语法：
、、、

function 函数名(){

}
、、、
1、实名函数
2、匿名函数：
    + 函数表达式
    + 自执行函数

//函数表达式
、、、

var fn = function() {

}

ele.onclick = function() {

}

、、、

function fn(){
    var a=3;
    console.log(a);//3
}
fn();
console.log(a);//报错(闭包):a is not defined;
、、、


## 箭头函数里面没有arguments,也没有this

