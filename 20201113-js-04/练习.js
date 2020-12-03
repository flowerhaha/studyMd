// 未知参数求和
function sum() {
    var res=null;
    for(var i=0;i<arguments.length;i++){
        res+=arguments[i];
    }
    return res;
}
console.log(sum(2,2,2));

// 考虑非有效字符的参数求和
function sum2(){
    var res2=null;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            res2+=Number(arguments[i]);
        }
    }
    return res2;
}
console.log(sum2("2","3px",5));