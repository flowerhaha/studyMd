// var ary = [8,2,1,5];
/*
需求：排序（升序）
第一轮：
    第一轮：[2,1,5,8] 经过一轮比较出现了最大数8
   第二轮：[1,5,2,8] 经过二轮比较得出第二个最大数5
   第三轮：[1,5,2,8]  经过二轮比较得出倒数第3个数2
   .... 总共四项，经过比三轮，已经得到了三个最大数了，第四轮就不用比较轮。最后一个自然就是最小数
   轮数的规律：ary.length-1;

   第一次：[2,1,5,8]；正常比较的时候：两两比较：ary.length-1-0
   第二次：[1,5,2,8]  ary.length-1-1
   第三次：【1，2，5，8】 ary.length-1-2

   轮数的规律：ary.length-1;
   两两比较的规律：ary.length-1-已经比过的轮数
*/

function mySort(ary){
    // 轮数
    for(var i=0;i<ary.length-1;i++){
        // 两两比较
        for(var j=0;j<ary.length-1-i;j++){
            // 当前项比下一项大，就换位置
            if(ary[j]>ary[j+1]){
                // 把ary[j]的值先临时存储一下
                var temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = temp;
            }
        }
    }
    return ary;
}
var ary = [8,2,1,5];
var res = mySort(ary);
console.log(res);  //[1,2,5,8]