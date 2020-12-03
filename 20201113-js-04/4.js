// 自执行函数: 一上来就执行
(function(){
    console.log(1);
})();

+function(){
    console.log(1);
}();

-function() {
    console.log(1);
}();

~function() {
    console.log(1);
}();

!function() {
    console.log(1);
}();



var a = 0;
var b = 3;

// var c = a || b++  // 先试用 再自加
var c = a++ && b++  
// a && b++   a ++  1

console.log(a, b, c)