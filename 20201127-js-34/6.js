var num=10;
var obj={num:20};
obj.fn=(function(num){
    //num为20，私有变量
    //this指的是window
   this.num=num*3;  //全局num = 20*3 = 60
   num++; //21
   return function(n){
       this.num+=n;  //fn(5)执行时，n=5,this指的是window，全局num=65    
                    //obj.fn(10);n=10,this指的是obj,obj.num=20+10=30
       num++; //向上级作用域查找num,此时num是22  ===>23
       console.log(num);//22  23
   }
})(obj.num);
var fn=obj.fn;
fn(5); //n=5 
obj.fn(10);
console.log(num,obj.num)  //65 30