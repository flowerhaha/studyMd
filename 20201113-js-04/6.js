// 已知有两个参数的求和
function fn(x,y){
    return x+y;
}
console.log(fn(1,2));

var add=(x,y)=>x+y;
console.log(add(1,3));

//不确定有几个参数
function total(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
var sum=total(1,2,3);
console.log(sum);

//考虑非有效字符的参数求和
function sum1(){
    var res=null;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            // 得转为Number()类型再相加
            res+=Number(arguments[i]);
        }
    }
    return res;
}
var res=sum1("2","2px",3);
console.log(res);



function total(){
    var res=null;
    for(var i=0;i<arguments.length;i++){
       var item=Number(arguments[i]);
       if(isNaN(item)){
           item=0;
       }
       res=res+item;
    }
    return res;
}
var result1=total("1",2,"16px",3);
console.log(result1);


// [升级版2]
// 如果传的实参中包含字符串，就变成数字，如果是非有效数字，就直接略过
function fn(){
    var total=null;
    for(var i=0;i<arguments.length;i++){
        var item=Number(arguments[i]);
        isNaN(item)?null:total+=item
    }
    return total;
 }

//  [高级版3：es6]
function fn(...arg){
    return eval(arg.filter((item)=>!isNaN(item)).join("+")) 
  }
  var res=fn(1,2,3,"3","3px");