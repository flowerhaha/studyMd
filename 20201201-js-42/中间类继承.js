/*
中间类继承：
    某些实例并不属于某类，但是想要用其原型上的方法，我们可以手动的更改实例的__proto__，让它指向这个类的原型，就可以使用其原型上的方法
    __proto__ 在ie浏览器下是不允许的
*/
function fn(){
    arguments.__proto__ = Array.prototype;
    var res = arguments.sort(function(a,b){
        return a-b;
    });
    console.log(arguments)
}
fn(8,2,10,6);