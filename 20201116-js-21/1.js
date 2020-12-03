// 求一个1-100的所有数之和
function total(star,end){
    var sum = null;
    for(var i=star;i<=end;i++){
        sum+=i;
    }
    return sum;
}
console.log(total(1,100));

// 递归
function total(num){
    if(num>100){
        return 0;
    }
    return num+total(num+1);
}
console.log(total(1));

// 求1到100中同时能被2整除又能被3整除的所有数之和
function total(star,end){
    var sum = null;
    for(var i=star;i<=end;i++){
        if(i%2==0 && i%3==0){
            sum+=i;
        }
    }
    return sum;
}
console.log(total(1,100));

// 递归
function total(num){
    if(num>100){
        return 0;
    }
    if(num%2==0 && num%3==0){
        return  num+total(num+1);
    }
    return total(num+1);
}
console.log(total(1));