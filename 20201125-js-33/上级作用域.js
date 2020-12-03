var a=2;
function fn(){ 
   console.log(a); //2 2
}
function sum(){
  var a=3;
  fn();
}
fn();
sum();

//上级作用域和函数在哪执行无关，和函数在哪定义有关