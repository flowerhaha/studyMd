// 数组去重
// var ary = [1,1,1,2,3,4,5,3,2,6];
/* 
思路：
第一次：
   拿出数组的第一项：1
                 给[2,3,2,4]进行比较，如果有重复就删除
   拿出数组的第二项：2   
                   ====[3,2,4]进行比较，有重复的删除 [3,4]  
   拿出数组的第三项:3
                   ===4 进行比较，有重复的删除，没有重复
   还用拿最后一项4吗？====不用了                                     
依次拿出数组中的每一项给剩余的所有项进行比较

*/
function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        // 此时i=0,当下面for循环走完之后才执行i++
        for(var j=i+1;j<ary.length;j++){
            if(ary[i]==ary[j]){
                ary.splice(j,1);
                j--;
            }
        }
    }
    return ary;
}
var ary = [1,1,1,2,3,4,5,3,2,6];
var ary2 = [2,3,2,4,4,5];
var res = unique(ary);
var res2 = unique(ary2);
console.log(res);  // [1, 2, 3, 4, 5, 6]
console.log(res2); //[2, 3, 4, 5]


// 法二{}  var ary1 =[2,1,2,3,2,4];
function unique2(ary1){
    // 先创建一个空对象
    var obj = {};
    for(var i=0;i<ary1.length;i++){
        //第一次的时候：item 2 obj[2]为undefined，不等于2，走obj[item] = item;obj{2:2};
        // 第二次的时候：item 1 obj[1]为undefined，走obj[item] = item;obj{2:2,1:1};
        // 第三次的时候：item 2 obj[2]==2为true，说明已经有此项，需要删除
        var item = ary1[i];
        // 说明此项已经有了
        if(obj[item]==item){
            ary1.splice(i,1);
            i--;
            continue;
        }
        obj[item] = item;
    }
    return ary1;
}
var ary1 =[2,1,2,3,2,4];
var res3 = unique2(ary1);
console.log(res3);

// 法三 
var ary4 = [1,3,1,2,3,2,4];
function unique3(ary4){
    var newAry = [];
    for(var i=0;i<ary4.length;i++){
        /*newAry.indexOf(ary[i])>-1 说明有 */
        if(newAry.indexOf(ary4[i])==-1){
            newAry.push(ary4[i]);
        }
    }
    return newAry;
}
var res4 = unique3(ary4);
console.log(res4);