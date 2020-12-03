/* 
原型继承
有A类、B类，想要让B所有的实例继承A类私有和公有的方法：
我们可以用原型继承：让B类的原型指向A类的实例
*/
function A(){
    this.a = "a";
}
A.prototype.getA = function(){
    console.log(this.a);
}
function B(){
    this.b = "b";
}
B.prototype = new A();   //让B的原型指向A的实例。因为A的实例具有A的私有和共有属性
var b = new B(); //想让b继承A的私有和共有属性

