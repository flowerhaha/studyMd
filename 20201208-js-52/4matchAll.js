//封装一个方法，既可以得到大正则捕获的内容，还可以得到每一次分组捕获的内容
//利用matchAll封装
let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)}/g;
function myMatch(reg){
    if(!reg.global){
        return reg.exec(this);
    }
    let obj = {
        big: [],
        small: []
    }
    // let Iterator = this.matchAll(reg);
    // for(let item of Iterator){
    //     obj.big.push(item[0]);
    //     obj.small.push(item[1]);
    // }
    let res = reg.exec(this);
    while(res){
        let [$1,$2] = res;
        obj.big.push($1);
        obj.small.push($2);
        res = reg.exec(this);
    }
    return obj.big.length ? obj : null;
}
String.prototype.myMatch = myMatch;
console.log(str.myMatch(reg));   //{ big: [ '{0}', '{1}', '{2}' ], small: [ '0', '1', '2' ] }