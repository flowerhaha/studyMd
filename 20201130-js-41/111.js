Array.prototype.MyPush = function(){
    for(var i=0;i<arguments.length;i++){
        this[this.length] = arguments[i];
    }
    return this.length;
}
var ary = [1,2,3,4];
console.log(ary.MyPush(8,8,8));
console.log(ary);