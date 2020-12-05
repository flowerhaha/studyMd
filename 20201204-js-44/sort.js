var ary2 = [{age:40},{age:20},{age:30}];
ary2.sort(function(a,b){
    //a,b代表每一项
    return a.age-b.age;
})
console.log(ary2);