/*
对象：
    属性名：可以是字符串和数字；
    属性值：可以是任意的数据类型
*/
var obj={name:"li",age:31,100:"he"};
/* 
获取属性名对应的属性值，方法
   1、 对象.属性名
    2、对象["属性名"]
    注意：如果属性名是数字的话，不能用第一种（会报语法错误），要用第二种
    在获取的时候，如果对象中没有这个属性，得到的值就是undefined
*/
console.log(obj.name);
console.log(obj["name"]);
//console.log(obj.100); //报错语法错误，数字属性名对应的属性值不能这样获取
console.log(obj[100]);

// 思考题：
var obj={
    name: "lili",
    age: 18
}
var name="zhufeng";
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[name]); //==>undefined 
// 因为obj[name],属性名是字符串和数字，[name]不是字符串也不是数字，是一个变量，所以值为undefined

//如果里面没有，我直接赋值就是添加，如果原来有，又赋值就是更改
var obj1={
    name: "lili",
    age: 13,
    100: "hehehe"
}
// 更改
obj1.age=100;
// 添加
obj1.job="qianduan";
console.log(obj1);

// 删除 属性名还在，只是值变成了null
obj1.name=null;
console.log(obj1);
// 彻底删除
delete obj1.age;
console.log(obj1);