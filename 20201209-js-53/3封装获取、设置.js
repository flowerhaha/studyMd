//封装一个方法专门用来设置或者获取浏览器的某些属性
function win(attr,value){
    if(value == undefined){
        return document.documentElement[attr] || document.body[attr]
    }
    document.documentElement[attr] = value;
    document.body[attr] = value;
}
win('scrollTop',100); //设置
console.log(win('clientWidth')); //获取