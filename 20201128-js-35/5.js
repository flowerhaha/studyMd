var n=2;
var obj={
    n:3,
    fn:(function(n){
      n+=2;
      this.n+=2;
      var n=5;
      return function (m){
         this.n*=2;
         console.log(m+(++n));
      }
    })(n)

};
var fn=obj.fn;
fn(3);
obj.fn(3);
console.log(n,obj.n)
/*
变量提升 var n  obj  fn
代码自上而下执行：
var n=2
var obj = {
  n:3,
  fn:(
    形参赋值n=2   obj中的n是属性名
    n+=2 ==>私有变量2+2=4 ==>5
    this.n+=2  ==>自执行函数中的this指的是window  全局n==>2+2=4
    var n=5 ==>私有变量5
  )()
  fn(3) ==>m=3 this指window n=4*2=8  console.log(3+(++n))==>n会向上级作用域中查找，n=5  3+6=9  此时私有变量n==》6
  obj.fn(3)==>m=3 this指的是obj obj的n=3*2=6  console.log(3+(++n))==>n会向上级作用域中查找,n=6 3+7=9  此时私有变量n==》7
  console.log(n,obj.n) ==>全局的是8 obj.n是6
}
*/