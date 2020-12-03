function fn(){
    console.dir(arguments);
    // arguments是一个类数组，typeof arguments为“object”
    
}
//console.dir(fn);
//fn.length 得到的是形参的个数
//fn.name 函数的名字
//fn(); //函数的执行
fn(1,2,3,4)