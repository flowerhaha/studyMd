// 链式调用
//var ary=[5,8,2,1,10] ；想要让这个数组先排序，然后再倒序，然后再往里面添加一个10，然后再删除第一项；
var ary=[5,8,2,1,10];
// ary.sort(function(a,b){
//     return a-b;
// })              //返回的是排序后的新数组  改变原数组
// ary.reverse();  //返回的是排序后的新数组  改变原数组
// ary.push(10);  //返回的是新的数组的长度 改变原数组
// ary.shift();   //删除数组的第一项  返回值是删除的项  改变原数组

// 实现链式写法：保证每次函数执行完毕之后的返回结果是当前类的实例
ary.sort(function(a,b){
    return a-b;
}).reverse().push(10);
ary.shift();


