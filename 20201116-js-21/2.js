// forEach
var ary=[1,2,3,4,5,6];
var res = ary.forEach(function(item,index){
    //item代表数组中的每一项
    //index代表数组中每一项的索引
    console.log(item+"---"+index);
})
console.log(res); //undefined  因为函数没有return返回值

// map 映射
var ary2=[1,2,3,4,5,6];
var res2 = ary2.map(function(item,index){
    return `<li>真美丽啊${index}</li>`
});
console.log(ary2);
console.log(res2);

var ary3=[1,2,3,4,5,6];
var res3 = ary3.map(function(item,index){
    // return item+=2  // item = item + 2
    return item + 2;
})
console.log(res3,ary3);


var ary3=[1,2,3,4,5,6];
function map(arr, callback) {
    let arr2  = [];
    for(let i = 0; i < arr.length; i ++) {
        arr2.push(callback(arr[i]));
    }    
    return arr2;   
}

var res4 = map(ary3, function(item,index){
    // return item+=2  // item = item + 2
    return item + 2;
})

console.log(res4)