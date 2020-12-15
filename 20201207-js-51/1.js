// ^ $  以什么开头，以什么结尾
let reg = /18$/; //以18结尾

let reg = /^18$/; //只能是18  两位   既要以18开头又要以18结尾

let reg = /^\d{2}/; //只能是数字0-9之间的数字出现两次

//转义字符 \
let reg = /^2.3$/; //三位  .代表任意字符，除了换行符
console.log(reg.test('2.3')) // true
console.log(reg.test('2e3')) // true
console.log(reg.test('2@3')) // true
//只匹配2.3  let reg = /^2\.3$/

//如果^$都不加，那只要出现正则里的字符就可以
// 如果^$都加，那匹配的字符必须跟正则的内容一样才可以
let reg = /^123456$/;
console.log(reg.test('000123456')); // false


/*匹配手机号
    1、11位
    2、1开头
    3、第二位3-9
*/
let reg = /^1[3-9]\d{9}$/;

// x|y x或者y之间取一个
let reg = /^18|29$/;
console.log(reg.test('18')); // true
console.log(reg.test('29')); // true
console.log(reg.test('189')); // true  8或2取一个
console.log(reg.test('129')); // true
console.log(reg.test('1829')); // true  

// ｜在使用的时候会产生很乱的优先级问题，所以在使用的时候一般都伴随着小括号进行分组使用
/* 
分组() 
    1.提高匹配的优先级
    2.分组引用
    3.分组捕获
*/

//提高匹配的优先级
let reg = /^(18|29)$/;
console.log(reg.test('18')); // true
console.log(reg.test('29')); // true
console.log(reg.test('189')); // false
console.log(reg.test('129')); // false
console.log(reg.test('1829')); // false

// 捕获
let reg = /a(\d+)a/;
let str = 'sdfa1aghjk';
reg.test(str); //true
reg.exec(str); //0: "a1a" 1: "1"  有括号进行了分组，会再次对括号里面的内容进行捕获


//引用
let str = 'moon';
//([a-z])\1 让第一次分组的内容再出现一次  1代表第一次的分组
let reg = /^[a-z]([a-z])\1[a-z]$/;

let str1 = 'abab';
let reg1 = /^([a-z]{2})\1$/
let reg2 = /^([a-z])([a-z])\1\2$/;

let str3 = 'acca';
let reg3 = /^([a-z])([a-z])\2\1$/








