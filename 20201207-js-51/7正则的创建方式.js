//正则的创建方式：字面量方式  构造函数
let reg = /\d+/;
let reg2 = new RegExp('\\d+');  // /\d+/
console.log(reg2);

//如果正则里的字符是动态的，那只能使用构造函数去创建
let str = 'aaa';
// let reg = /^"+str+"$/
// console.log(reg);
let reg = new RegExp(`^${str}$`);
console.log(reg);

