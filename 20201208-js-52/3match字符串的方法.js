// match 它是字符串身上的一个方法
//如果当前正则不加g，那方法返回的值跟exec一样
// 如果正则匹配不到那就返回null
// 正常情况下返回的是一个数组，数组里存放的是捕获到的每一项内容
let str = "asd123as456as789d";
let reg = /\d{3}/g;
console.log(str.match(reg));

//其他特点
//match只能拿到每一次大正则捕获的内容，但是不能捕获到每一次小分组的内容
let str = "{0}年{1}月{2}日";
let reg1 = /\{(\d+)}/g;
console.log(str.match(reg1));//[ '{0}', '{1}', '{2}' ]
console.log(reg1.exec(str)); //[ '{0}', '0', index: 0, input: '{0}年{1}月{2}日', groups: undefined ]
console.log(reg1.exec(str));//[ '{1}', '1', index: 4, input: '{0}年{1}月{2}日', groups: undefined ]


//String.prototype.matchAll  是一个字符串的方法，它的返回值是一个迭代器
console.log(str.matchAll(reg1));
let str = "{0}年{1}月{2}日";
let reg1 = /\{(\d+)}/g;
let Iterator = str.matchAll(reg1);
let ary = [];
for(let item of Iterator){
    ary.push(item[1]);
    console.log(item);
}
console.log(ary);  //能得到分组中的内容
