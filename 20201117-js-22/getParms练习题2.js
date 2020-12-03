//  queryURLParams 问号参数处理
// var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
// {
//     name:"zhufeng",
//     age:10,
//     id:14
// }
/*
var res1 = str.split("?");
console.log(res1);
var res2 = res1[1];
console.log(res2);
// var res3 = res2.split("=");
var res4 = res2.split("&");
console.log(res4);
*/
function getParms(str){
    var obj = {};
    var strParms = str.split("?")[1];
    var strAry = strParms.split("&");
    // console.log(res3);//["name=zhufeng", "age=10", "id=14"]
    for(var i=0;i<strAry.length;i++){
        var item = strAry[i].split("=");
        // console.log(item); //["name", "zhufeng"]
        obj[item[0]] = item[1];
    }
    return obj;
}
var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
 var res = getParms(str);
 console.log(res);