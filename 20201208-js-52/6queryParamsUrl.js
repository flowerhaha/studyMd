let url = 'http://www.baidu.com?name=erya&age=18&sex=0#index';
// 利用了replace可以捕获的特点，没有返回值
function queryUrlParams(){
    let reg = /([^?=&#]+)=([^?=&#]+)/g;  //写一个正则先把当前URL里的所有参数捕获到
    //console.log(this.match(reg));
    let obj = {};
    this.replace(reg,(...ary)=>{
        let [,key,value] = ary;
        obj[key] = value;
    })
    this.replace(/#([a-z]+)/g,(...ary)=>{
        obj["hash"] = ary[1];
    })
    console.log(obj);
}
String.prototype.queryUrlParams = queryUrlParams;
url.queryUrlParams(); //{ name: 'erya', age: '18', sex: '0', hash: 'index' }