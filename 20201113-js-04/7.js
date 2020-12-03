var res=function(x,y){
    console.log(arguments);
    return x+1;
}
res(1,2);

var res=(x,y)=>{
    console.log(arguments);//箭头函数中没有arguments
    return x+1;
}
res(1,2)


var fn=(...arg)=>{
    console.log(arg);
}
fn(1,2);