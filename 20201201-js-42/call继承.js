/*
call继承：B类和A类，想要让B类的实例拥有A类的私有属性，我们可以让A当成普通函数执行，把里面的this指向进行更改成B类的实例（往B的实例上去添加属性）
*/
function A(){
    this.a = "a";
    this.x = 100;
}

function B(){
    // 改变A里面的this指向，指向B的实例b
    A.call(this);
    this.b = "b";
    this.y = 200;
}
var b = new B();  //想要b有A的私有属性     （思路：因为b是B的实例，有B的共有和私有属性，把A的私有属性添加到B里面即可）
console.log(b);