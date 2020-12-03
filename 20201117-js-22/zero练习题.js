//## 练习题   "2019年08月18日 12时32分18秒"
var str="2019-8-18 12:32:18";
function zero(num) {
    // if(num<10){
    //     return "0"+num;
    // }
    // return num;
    return num<10?"0"+num:num;
}
var res=str.split(" ");
// console.log(res);
var res2 = res[0].split("-");
// console.log(res2);
var res3 = zero(res2[0])+"年"+zero(res2[1])+"月"+zero(res2[2])+"日";
// console.log(res3);
var res4 = res[1].split(":");
// console.log(res4);
var res5 = zero(res4[0])+"时"+zero(res4[1])+"分"+zero(res4[2])+"秒";
// console.log(res5);
var res6 = res3+" "+res5;
console.log(res6);

/*
var str="2019-8-18 12:32:18";
//var res=str.split(/-| |:/g)

var time=str.split(" ");
console.log(time) //["2019-8-18", "12:32:18"]
var timeLeft=time[0];
var timeRight=time[1];
var ary1=timeLeft.split("-"); // ["2019", "8", "18"]
var ary2=timeRight.split(":");// ["12", "32", "18"]

var result=ary1[0]+"年"+ary1[1]+"月"+ary1[2]+"日"+" "+ary2[0]+"时"+ary2[1]+"分"+ary2[2]+"秒" 
console.log(result) //"2019年8月18日 12时32分18秒"

/* 
  补零
*/

/*
function zero(num){
    return num<10?"0"+num:num;
}
var ss=zero(11);

var result=zero(ary1[0])+"年"+zero(ary1[1])+"月"+zero(ary1[2])+"日"+" "+zero(ary2[0])+"时"+zero(ary2[1])+"分"+zero(ary2[2])+"秒" 

//"2019年08月18日 12时32分18秒"

*/

