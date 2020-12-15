//map  把一个数组可以映射成一个新的数组  参数：函数  返回值：映射后的新数组  不修改原数组
Array.prototype.myMap = function(callBack){
    let resAry = [];
    for(let i=0;i<this.length;i++){
        let fnCall = callBack(this[i],i);
        resAry.push(fnCall);
    }
    return resAry;
}
let ary = [1,2,3,5];
let res = ary.myMap(function(item,index){
    return item+"index";
})
console.log(res,ary);