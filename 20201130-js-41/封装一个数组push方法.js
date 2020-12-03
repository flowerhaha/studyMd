// 自己手动封装一个myPush方法，模拟Array原型上的push方法
//需要注意的地方：自己添加的方法不要和人家内置的方法一样，不然的会直接替换掉
Array.prototype.push=function(){
    return 100;
  }
  var ary=[1,2,3];
  console.log(ary.push(100));
Array.prototype.Mypush = function(){
    //往末尾追加项的次数
    for(var i=0;i<arguments.length;i++){
        this[this.length] = arguments[i];
    }
    return this.length;
}
var array = [1,2,3,4]
console.log(array.Mypush(5,6,7)); //返回值是新数组的长度，原数组通过此方法，在选项卡末尾添加ary[ary.length]=x
console.log(array);



/*
复习：
    【1】删除数组最后一项，你有几种方法？
        ary.length--;
        ary.pop();
        ary.splice(ary.length-1,1);
    
    【2】向数组末尾追加新内容，你有几种方法？
        ary.push();
        ary.splice(ary.length,0,x)
        ary[ary.length] = x;
*/