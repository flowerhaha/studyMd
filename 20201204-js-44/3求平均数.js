//求平均数：去掉最高分，去掉最低分，求平均数
function average(...arg){
    //var newArray = Array.from(arguments);
    var ary = arg.sort((a,b)=>a-b);
    ary.pop();
    ary.shift();
    var sum = 0;
    for(var i=0;i<ary.length;i++){
        sum+=ary[i];
    }
    return sum/ary.length;
}
var res = average(1,2,8,10);
console.log(res);


// ========>2
function average(...arg){
    var ary = arg.sort((a,b)=>a-b);
    ary.pop();
    ary.shift();
    return eval(ary.join("+"))/ary.length;
}
var res = average(1,2,8,10);
console.log(res);

//=======>3
function average(){
    var max = Math.max(...arguments);
    var min = Math.min(...arguments);
    return (eval([...arguments].join("+"))-max-min)/(arguments.length-2);
}
var res = average(1,2,8,10);
console.log(res);


