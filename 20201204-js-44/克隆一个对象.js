// 浅克隆:浅克隆在克隆的时候克隆的是空间地址（空间地址相同，所以一个改另一个也会改）
var obj = {name:"li",a:{c:100}};
var obj2 = {};
for(var key in obj){
    // console.log(key);
    obj2[key] = obj[key];
}
obj2.a.c = 300;
console.log(obj,obj2);

// 深克隆，不互影响
var obj = {name:"li",a:{c:100}};
var obj2 = JSON.parse(JSON.stringify(obj));
obj2.a.c = 200;
console.log(obj,obj2);//{ name: 'li', a: { c: 100 } } { name: 'li', a: { c: 200 } }