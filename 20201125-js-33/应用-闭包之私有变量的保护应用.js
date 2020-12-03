// 1】闭包之私有变量的保护应用
// 通过window添加属性暴漏到全局
(function(){
    function JQuery(){
        console.log(1);
    }
    window.JQuery = window.$ = JQuery;
})()

//JQuery();
// $();

var utils = (function(){
    var num = 0;
    function fn1(){
        console.log(1);
    }
    return {
        fn1:fn1
    }
})()
//在使用的时候：utils.fn1

