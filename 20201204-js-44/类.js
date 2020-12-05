function A(name){
    this.a = 100;
    this.y = 200;
}
A.prototype.getA = function(){
    console.log("getA");
}
A.prototype.f = 100;
A.a = 600;


// 针对上面，es6的写法
class A{ //既不是对象也不是作用域
    constructor(name){  //私有的属性
        this.a = 100;
        this.y = 200;
    }
    // 原型上的方法，只能是原型上的方法
    getA(){
        console.log("getA");
    }
    // 给实例添加私有属性
    f=300
    // 把A这个类当成对象，把它添加静态属性
    static a = 600;
}
var a = new A();

A(); //报错，不能调用
