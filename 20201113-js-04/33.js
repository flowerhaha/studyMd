// 未知参数的求和
var sum=function(){
    var res=0;
    for(var i=0;i<arguments.length;i++){
        res+=arguments[i];
    }
    return res;
}
var res=sum(2,3,4);
console.log(res);


// 考虑非有效字符的求和
function sum2(){
    var res2=0;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            res2+=Number(arguments[i]);
        }
    }
    return res2;
}
console.log(sum2("2","3px",5));
