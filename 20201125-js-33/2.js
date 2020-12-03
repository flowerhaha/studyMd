//参考私有变量和全局变量的分析图
var ary=[12,13];
function fn(ary){
   console.log(ary);
   ary[0]=100;
   ary=[100];
   ary[0]=0;
   console.log(ary);
}
fn(ary);
console.log(ary);