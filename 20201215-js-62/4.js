let ary = [1,2,3,[4,5,6,[7,8,[9,0]]]];
// [1,2,3,4,5,6,7,8,9,0]
//console.log(ary.flat(Infinity));   

//自己封装一个数组扁平化的方法
Array.prototype.myFlat = function(){
    //this -> ary
    let newAry = [];
    let _this = this;
    //递归
    function fn(ary){
        ary.forEach((item,index)=>{
            if(Array.isArray(item)){
                //如果if成立，说明当前项是数组
                fn(item);
            }else{
                newAry.push(item);
            }
        })
    }
    fn(_this)
    return newAry;
}
console.log(ary.myFlat());


//也可以用toString方法，但当有不是数组的项时不适用
// let ary = [1,2,[3,4,[5,6,{ss:100}]]]
// let ary = [1,2,3,[4,5,6,[7,8,[9,0]]]];
// let arr = ary.toString().split(',');
// arr.forEach((item,index)=>{
//     arr[index] = Number(item);
// })
// console.log(arr);

