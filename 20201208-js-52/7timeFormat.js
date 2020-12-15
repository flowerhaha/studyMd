let time = '2019-12-3';
// 想要得到这样的结果 ==>'2019年12月03日 12时10分03秒'
let reg = /\d+/g;
// console.log(time.match(reg));
function timeFormat(template = "{0}年{1}月{2}日 {3}时{4}分{5}秒"){
    let timeAry = this.match(reg);
    //let template = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
    // template中的数字就是对应时间的索引
    template = template.replace(/\{(\d)\}/g,(...ary)=>{
        let [,index] = ary;
        let timeTepm = timeAry[index] || "00"; // 如果在timeAry中获取不到对应的值，就赋一个默认值 '00'
        timeTepm = timeTepm.length < 2 ? "0"+timeTepm : timeTepm;
        return timeTepm;
    })
    return template;  
}
String.prototype.timeFormat = timeFormat;
console.log(time.timeFormat('{0}/{1}/{2}/'));