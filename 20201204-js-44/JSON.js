var obj = {name:"age",age:18};
// 转为JSON格式的字符串
var res = JSON.stringify(obj);
console.log(res);
// 转为JSON格式的对象
res = JSON.parse(res);
console.log(res);
