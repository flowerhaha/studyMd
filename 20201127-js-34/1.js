var a=4;
function b(x,y,a){
  console.log(a);
  arguments[2]=10;
  console.log(a);
}
a=b(1,2,3);  //函数执行的结果return多少就是多少，没有return 就是undefined
console.log(a)  //undefined