var ary=[1,2,3,4,5,6,7,8];
// 正打印
// for(var i=0;i<ary.length;i++){
//     console.log(ary[i]);
// }
// 倒打印
// for(var i=ary.length-1;i>=0;i--){
//     console.log(ary[i]);
// }
// 奇数项打印
for(var i=0;i<ary.length;i++){
    if(i%2==0){
        console.log(ary[i]);
    }
}
for(var i=0;i<ary.length;i+=2){
    console.log(ary[i]);
}
