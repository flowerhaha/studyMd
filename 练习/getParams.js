function getParams(str){
    var obj = {};
    var aryLis = str.split("?")[1];
    // console.log(aryLis); //name=“lili”&age=“10”   是一个字符串
    var strAry = aryLis.split("&");
    // console.log(strAry);//[ 'name=“lili”', 'age=“10”' ]
    for(var i=0;i<strAry.length;i++){
        var item =strAry[i].split("=");
        obj[item[0]] =item[1];
    }
    return obj;
}
var str = "http://www.baidu.com?name=“lili”&age=“10”";
var res = getParams(str);
console.log(res);