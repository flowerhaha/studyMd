/*
4、【思考题】
把下面的代码改成三元运算符
var num=12;
if(num>0){
   if(num<10){
     num++;
   }else{
     num--;
   }
}else{
    if(num==0){
       num++;
       num=num/10;
    }
}
console.log(num);
*/
var num=12;
num>0?(num<10?num++:num--):(num==0?(num++,num=num/10):null);
console.log(num);

