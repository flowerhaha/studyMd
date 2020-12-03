// 冒泡排序
function mySort(){
    for(var i=0;i<ary.length-1;i++){
        for(var j=0;j<ary.length-1-i;j++){
            if(ary[j]>ary[j+1]){
                var temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = temp;
            }
        }
    }
    return ary;
}
var ary = [8,2,3,1,5];
var res = mySort(ary);
console.log(res); //[ 1, 2, 3, 5, 8 ]