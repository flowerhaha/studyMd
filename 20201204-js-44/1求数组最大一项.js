//经过第一轮比较就可以拿到一个最大值
var ary = [20,100,30,50];
for(var i=0;i<ary.length;i++){
    if(ary[i]>ary[i+1]){
        var temp = ary[i];
        ary[i] = ary[i+1];
        ary[i+1] = temp;
    }
}
console.log(ary[ary.length-1]);

//-------2
var ary = [20,100,30,50];
ary.sort((a,b)=>b-a)[0];

//--------3
var ary = [20,100,30,50];
ary.sort((a,b)=>a-b)[ary.length-1];

ary.sort((a,b)=>a-b).pop();

//---------4
var ary = [20,100,30,50];
var res = Math.max(...ary);
console.log(res);

//----------5
var ary = [20,100,30,50];
var res = Math.max.apply(null,ary);
console.log(res);
