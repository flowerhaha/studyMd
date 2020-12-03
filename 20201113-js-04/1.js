var obj={
    "name": "li",
    "age": 18,
    "job": "sss"
};
// for in 循环
//遍历对象中的属性名和属性值
for(var key in obj){
   //console.log(key);  //获取属性名
   var value=obj[key];
   //console.log(value);
   console.log("key:"+key+"value:"+value);

}