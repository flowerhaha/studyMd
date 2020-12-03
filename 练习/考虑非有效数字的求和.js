// 不知道要传递多少参数，考虑非有效数字的求和
function sum(){
    var total = 0;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            total+=Number(arguments[i]);
        }
    }
    return total;
}
console.log(sum("1px",2,null,"3"));