// 打印奇数项,就是打印索引是偶数项的值
var ary=[1,2,3,4];
for(var i=0;i<ary.length;i++){
    if(i%2==0){
        console.log(ary[i]);
    }
}
for(var i=0;i<ary.length;i+=2){
    console.log(ary[i]);
}
// for(var i=0;i<ary.length;i++){
//     if(i%2>0){
//         console.log(ary[i]);
//     }
// }

