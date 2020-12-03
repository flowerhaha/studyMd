function fn(){
    // 这里的this
    console.log(this);  //函数在哪调用，看前面有没有.,没有点
}
box.onclick=function(){
  console.dir(this);
  fn()
}