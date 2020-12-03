/*
思考题：
栈内存：
    1、供js代码运行
    2、存基本数据类型的值
堆内存：
    主要用来存放引用数据类型：
        如果是对象，存的就是属性名和属性值
        如果是函数，把函数当成字符串存起来
基本数据类型和引用数据类型有什么区别？
基本数据类型按值操作，引用数据类型是按空间地址操作


*/
var a=12;
var b=a;
console.log(b);
var obj1={"name":"lili","age":12};
var obj2=obj1;
obj2.age=18;
console.log(obj1.age);//18

// 思考题2:
// 原因：代码执行到b时，找obj.n,此时obj还没有赋值，为undefined，所以报错
var obj = {
    n: 10,
    b: obj.n*10
}
console.log(obj.b); //报错：Uncaught TypeError: Cannot read property 'n' of undefined