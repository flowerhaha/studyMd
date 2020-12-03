/*原理：先拿出中间项，然后把此项从数组中删除掉，让数组中的剩余项一一跟这个中间项做比较，新建两个左右数组，如果大的项就放到右盒子，如果小的项就放到左盒子
 [左盒子小]--中间项--[右盒子大]
 依次再继续重复相同的步骤，把左盒子和右盒子都进行排序，直到出现空数组或者一项的时候停止 */

function quickSort(ary){
    if(ary.length<=1){
        return ary;
    }
    // 中间项的索引
    var centerIndex = Math.floor(ary.length/2);
    // 中间项
    var centerValue = ary.splice(centerIndex,1)[0];
    var leftAry = [],rightAry = [];
    for(var i=0;i<ary.length;i++){
        if(ary[i]<centerValue){
            leftAry.push(ary[i]);
        }else{
            rightAry.push(ary[i]);
        }
    }
    return quickSort(leftAry).concat(centerValue,quickSort(rightAry));
}
var ary=[12,15,14,13,16,11];
var res = quickSort(ary);
console.log(res);