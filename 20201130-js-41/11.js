function Fn() {
    let a = 1;
    this.a = a;
}
Fn.prototype.say = function () {
    this.a = 2;
}
Fn.prototype = new Fn;
let f1 = new Fn;

Fn.prototype.b = function () {
    this.a = 3;
};
console.log(f1.a); //1
console.log(f1.prototype); //// f1 是实例，实例上没有prototype 这个属性所以是undefined
console.log(f1.b);  //function () {this.a = 3;};  函数体
console.log(f1.hasOwnProperty('b'));  //false
console.log('b' in f1);  //true
console.log(f1.constructor == Fn);  //true