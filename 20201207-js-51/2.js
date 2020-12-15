/*
正则的正负向预查
    (?=):正向预查
    (?!):负向预查

*/
let reg = /zhufeng(?=peixun)/;  //zhufeng后边必须跟的是peixun
let str = 'zhufengsss';
console.log(reg.test(str))
let reg = /zhufeng(?!peixun)/; // zhufneg后边不能跟peixun
let str = 'zhufengpeiixun';
console.log(reg.test(str));
