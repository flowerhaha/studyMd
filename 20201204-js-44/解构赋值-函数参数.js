function fn([x,y]){
    console.log(x,y);
}
var ary = [1,2];
fn(ary);


// 设置参数的默认值
function fn(x=20,y=30){
    console.log(x,y);
}
fn(10);

function fn({age:a}){
    console.log(a);
}
fn({name: "li",age:10})