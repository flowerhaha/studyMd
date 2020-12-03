let obj={
    name:"li",
    fn:(function(n){
         console.log(this);  //自执行函数  window
         return function(){
            console.log(this);  //obj   fn就是自执行函数的返回结果
         }
    })(10),
  }
  obj.fn();