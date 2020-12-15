RegExp.prototype.test(); //用来匹配的
RegExp.prototype.exec(); //是正则原型上的一个方法
//exec返回值的特点：
//1、是数组类型的，如果捕获不到就是null
//1、数组的正常项是捕获到的内容
//2、index是第一次捕获内容开始位置的索引
//3、input是原字符串

//正则的懒惰性：正则在捕获的时候只会把第一次符合规则的内容捕获到
let str = 's123sd456fghj789kl';
let reg = /\d{3}/;
// 正则是一个对象，身上有lastIndex属性
// lastIndex控制的是当前正则捕获开始位置的索引
console.dir(reg.lastIndex); // 0
console.log(reg.exec(str)); // '123'
console.dir(reg.lastIndex); // 0
console.log(reg.exec(str)); // '123'

//-------------------------------------
reg = /\3{3}/g;
// 在正则末尾加上修饰符，取消正则的懒惰性
// 加上g之后，每捕获一次，lastIndex就会发生变化，会成为下一次捕获开始位置的索引
// console.dir(reg.lastIndex); // 0
// console.log(reg.exec(str)); // '123'
// console.dir(reg.lastIndex); // 4
// console.log(reg.exec(str)); // '456'
// console.dir(reg.lastIndex); // 9
// console.log(reg.exec(str)); // '789'
// console.dir(reg.lastIndex); // 16
// console.log(reg.exec(str)); // null
// // 当正则捕获到末尾捕获不到东西的时候，这时的lastIndex会变为0，从头在开始捕获(循环)
// console.dir(reg.lastIndex); // 0
// console.log(reg.exec(str)); // null

//正则的贪婪性
let str = '2019';
let reg = /\d+/g;
// // 当正则捕获的时候能多捕获一个就多捕获一个，绝不会少捕获
// console.log(str.match(reg)); // ['2019']

// //---------取消正则的贪婪性(在量词元字符的后面加?)
    // reg = /\d+?/g;
    // console.log(str.match(reg));// ['2','0','1','9']

/*
在量词元字符的后面加？是取消正则的贪婪性
在分组前加?:是只匹配不捕获
？=是正向预查
？！负向预查
*/

// 说一些知道就行的东西
let str = 'd123fghj456klfg789hjfgh';
let reg = /(\d)(\d)(\d)/g;
reg.test(str) // true

console.dir(RegExp);


//当前正则实例匹配的内容会放在正则类的私有属性上($1-$9)
//正则类上的上的$1-$9存储的是正则匹配到的分组内容
// $&这是大正则捕获到的内容