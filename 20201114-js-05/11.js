// 非有效数字的求和
var sum = function(){
    var res=0;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            res+=Number(arguments[i]);
        }
    }
    return res;
}
var res=sum("2",1,"3px",4,"w12",NaN,"null");
console.log(res);