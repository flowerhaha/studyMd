// 数组去重
//var ary = [1,1,2,1,2,3,2,4];
function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        for(var j=i+1;j<ary.length;j++){
            if(ary[i]==ary[j]){
                ary.splice(j,1);
                j--;
            }
        }
    }
    return ary;
}
var ary = [1,1,2,1,2,3,2,4];
var res = unique(ary);
console.log(res); //[1, 2, 3, 4]


//法二
function unique2(ary){
    var obj = {};
    for(var i=0;i<ary.length;i++){
        var item = ary[i];
        // if(obj[item]==item)
        if(typeof obj[item] != "undefined"){
            ary.splice(i,1);
            i--;
            continue;
        }
        obj[item] = item;
    }
    return ary;
}
var ary2 = [1,1,1,2,3,2,4,5];
var res2 = unique2(ary2);
console.log(res2); //[1, 2, 3, 4, 5]


//法三
function unique3(ary){
    var newAry = [];
    for(var i=0;i<ary.length;i++){
        if(newAry.indexOf(ary[i]) == -1){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}
var ary3 = [1,1,2,3,2,4,6,6];
var res3 = unique3(ary3);
console.log(res3); //[1, 2, 3, 4, 6]
