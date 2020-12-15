//数组方法的封装
//forEach  参数：函数  返回值：undefined   不修改原数组
Array.prototype.myForEach = function(callBack){
    for(let i=0;i<this.length;i++){
        callBack(this[i],i);
    }
}
let ary = [1,2,3,4];
ary.myForEach(function(item,index){
    console.log(this);  //window   看函数执行时前面是谁
});
// let ary = [1,2,3,4];
// ary.forEach((item,index)=>{
//     console.log(item,index);
// })

//map