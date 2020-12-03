//打印1-10
function fn(num){
    if(num>10){
        return;
    }
    console.log(num);
    fn(num+1);
}
fn(1);

// 1-100
function fn(num){
    var sum = 0;
    for(var i=0;i<=100;i++){
        sum+=i;
    }
    return sum;
}
var res = fn();
console.log(res);


// 递归 1-100求和
function total(num){
    if(num>100){
        return 0;
    }
   return num+total(num+1);
}
var res = total(1);
console.log(res);

//[练习题]：求1到100中同时能被2整除又能被3整除的所有数之和
var sum = 0;
for(var i=1;i<=100;i++){
    if(i%2==0 && i%3==0){
        sum+=i;
    }
}
console.log(sum);

//递归
function total(num){
    if(num>100){
        return 0;
    }
    if(num%2==0 && num%3==0){
        return num+total(num+1);
    }
    return total(num+1)
}
var res = total(1);
console.log(res);