var foo="hello";
(function(foo){
  console.log(foo);
  var foo=foo||"word";  //或：第一个值为真，返回第一个值
  console.log(foo);
})(foo);
console.log(foo);

/*
自执行函数： 
1 形参赋值 foo = "hello"
2 var foo 因为形参已经声明赋值过了，不能重复声明，此步跳过
*/