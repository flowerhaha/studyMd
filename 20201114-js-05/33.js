//考虑非有效字符的求和
function sum(){
    var res=0;
    for(var i=0;i<arguments.length;i++){
        if(isNaN(arguments[i])==false){
            res+=Number(arguments[i]);
        }
    }
    return res;
}
console.log(sum("we1","3",4,null));