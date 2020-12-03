//2) 只对等号左边的做变量提升
console.log(fn);  //undefined
console.log(fn(1,2));  //报错 fn is not a function  函数就不往下执行
var fn=function (n,m){
    return n+m;
 }
console.log(fn(3,4));


sum(); //2
fn(); //报错
var fn=function(){
    console.log(1);
};

function sum(){
    console.log(2);
}

fn();
sum();


console.log(obj.f1); //TypeError: Cannot read property 'f1' of undefined
var obj={
    f1:function(){
       console.log(1)
    }
}

