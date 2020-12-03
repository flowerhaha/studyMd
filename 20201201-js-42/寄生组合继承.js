/*
寄生组合继承:A类、B类，B类想要继承A类的私有和共有
*/
function A(){
    this.a = "a";
    this.x = 100;
}
A.prototype.getA = function(){
    console.log("A")
}
function B(){
    A.call(this);
    this.b = 200;
    this.y = 300;
}
// var obj = {};
// obj.__proto__ = A.prototype;
// B.prototype = A.prototype;
B.prototype = Object.create(A.prototype);  //创建一个空对象，并且让空对象的__proto__指向参数
var b = new B();

//此方法也有弊端，B的原型就直接废弃了。。。可以使用for in 拿到A里面的所有属性，然后再添加给B