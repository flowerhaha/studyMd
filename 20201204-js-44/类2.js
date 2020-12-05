class A{
    constructor(name){
        this.a = 100;
        this.y = 200;
    }
    getA(){
        console.log("getA");
    }
    f=300
    static a = 600;
}
class B extends A{
    constructor(){
        super(); //相当于是call继承
        this.a = "a";
        this.y = "b"; 
    }
    getB(){
        console.log("getB");
    }
    fn(){
        // 通过super 可以拿到A类原型上的方法
        super.getA();
    }
}
var b = new B();
b.fn();