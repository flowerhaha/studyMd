// 正则捕获之replace
/*
RegExp.prototyperouter.replace
1. 'old','new'
2. reg,'new'
3. reg,function
*/
// let str = 'zhufeng2019|zhufeng2020';
    // 需求==>把zhufeng替换为 珠峰
    // str = str.replace('zhufeng','珠峰').replace('zhufeng','珠峰');
    // console.log(str);
    // 利用正则的话就会变得简单一些
    // str = str.replace(/zhufeng/g,'珠峰');
    // console.log(str);

    //--------------------------------------------------
    // let str = 'zhufeng2019|zhufeng2020';
    // // 需求==>把zhufeng替换为zhufengpeixun
    // // str = str.replace('zhufeng','zhufengpeixun').replace('zhufeng','zhufengpeixun')
    // // 'zhufengpeixunpeixun2019|zhufeng2020'
    // str = str.replace(/zhufeng/g,'zhufengpeixun');
    // console.log(str);

let str = 'df123gh456jk789l';
let reg = /\d{3}/g;
let res = str.replace(reg,function(...ary){
    //replaced第二个参数可以传递一个回调函数，执行机制跟map类似，正则捕获几次，当前回调函数就会执行几次，而且每一次捕获的时候会把当前捕获的内容传递传递给回调函数
    //当前replace会返回一个全新的字符串，回调函数每一次return的结果会把捕获到位置的内容进行替换
    //console.log(arguments);
    // console.log(ary);
    return '$';//df$gh$jk$l
})
console.log(res);

//-------------------------------------------
let str = 'zhufeng2019|zhufeng2020';
// // 需求==>把zhufeng替换为 zhufengpeixun
str = str.replace(/zhufeng/g,(...ary)=>{
    return "zhufengpeixun";
})
console.log(str);
//-------------------------------------------------


//案例：把时间字符串进行处理  转换为“2019年08月13日”
let time = "2019-8-13";
let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/;
// console.log(reg.exec(time));
let str = time.replace(reg,function(...ary){
    let [,$1,$2,$3] = ary;   //ary[0]第一位不需要，则用,占位
    $2 = $2.length < 2 ? "0"+$2 : $2;
    $3 = $3.length < 2 ? "0"+$3 : $3;
    return `${$1}年${$2}月${$3}日`;
});
console.log(str);


//单词首字母大写
let str = "good good study,day day up!";
let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;
let str1 = str.replace(reg,(...ary)=>{
    let [word,first,next] = ary;
    first = first.toUpperCase();
    return first+word.slice(1);
})
console.log(str1);
