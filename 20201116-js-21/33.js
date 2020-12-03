//去重练习
// var ary = [1,1,3,2,3,2,4,5];
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
var ary = [1,1,3,2,3,2,4,5];
var res = unique(ary);
console.log(res);  //[1,3,2,4,5]

// 法二
function unique2(ary){
    var obj = {};
    for(var i=0;i<ary.length;i++){
        var item = ary[i];
        if(obj[item]==item){
            ary.splice(i,1);
            i--;
            continue;
        }
        obj[item] = item;
    }
    return ary;
}
var ary2 = [1,1,4,4,2,1,3,5];
var res2 = unique2(ary2);
console.log(res2); //[1, 4, 2, 3, 5]


// 法三
function unique3(ary){
    var newAry= [];
    for(var i=0;i<ary.length;i++){
        if(newAry.indexOf(ary[i]) == -1){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}
var ary3 = [1,2,1,3,3,2,3];
var res = unique3(ary3)
console.log(res); //[1,2,3]