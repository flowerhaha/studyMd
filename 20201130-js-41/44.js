function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum); //true
f.sum(); //20
Fn.prototype.sum(); //NaN
console.log(f.constructor);  //[Function: Object] 从代码第四行，改变了原型的空间地址，就没有constructor了