/* this不能直接修改 */

//call
var name = "window";
function fn(x,y){
    console.log(this.name);
    return x+y;
}
var obj = {name: "li",fn:fn};
fn.call(obj,1,2); //第一个参数：更改this的指向，第二个参数开始就是函数执行所需要的正常参数

//call bind apply 这三个方法是存在Function的原型上的，只要是函数都可以去用（Object也可以使用）

var res = n.call(obj,1,2);
/*
执行过程：
1、通过原型链找到Function.prototype 上的call方法
2、找到之后，让fn这个方法执行
3、执行的时候，内部需要把Fn里面的this进行改变，改成第一个参数
*/

// 在非严格模式下：不传或者null、undefined  ==> this都是window
// 在严格模式下：不传或者undefined  this===》undefined     传的null==>null
function fn(){
    console.log(this);
}
fn.call();



//==========> apply; 和call这个方法相同，就是第二个参数是以数组（类数组）形式进行传参的

var obj = {
    name: "li"
}
function fn(x,y){
    console.log(this,x,y);
}
fn.apply(obj,[1,2]);


//=========> bind 通过bind这个方法，只是预先处理this指向，并不能让函数执行，想要让函数执行，咱们需要再调用一下返回值   还有一种情况就是添加事件的时候可以使用，先预处理，不会一上来就执行
var obj = {
    name: "li"
}
function fn(x,y){
    console.log(this,x,y);
}
var res = fn.bind(obj,1,2);
console.log(res());