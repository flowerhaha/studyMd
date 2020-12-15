// 封装一个方法，可以把当前字符串里所有符合规则的内容全部捕获到，并且以数组的形式返回
let str = "asd123as456as789d";
let reg = /\d{3}/;
function myExec(str){
    if(!this.global){          //如果正则不加g，那正则的私有属性global的值就是false
        return this.exec(str);
    }
    let ary = [];
    let res = this.exec(str);
    while(res){
        ary.push(res[0]);
        res = this.exec(str);
    }
    return ary.length ? ary : null;
}
RegExp.prototype.myExec = myExec;
// let res2 = reg.myExec(str);
// console.log(res2);


// match 他是字符串身上的一个方法
console.log(str.match(reg));


