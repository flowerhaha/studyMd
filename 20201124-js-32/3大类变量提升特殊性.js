/* return 下面的代码虽然不能执行，但是可以进行变量提升，return 后面的代码不进行变量提升
f1不进行变量提升 f2进行变量提升但是代码不执行
*/
function fn(){
    console.log(f2); //[Function: f2]
    console.log(f1); //报错 f1 is not defined
    return function f1(){
    }
    function f2(){
      console.log("f2")
    }
  }
  fn();