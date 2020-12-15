//封装获取或设置css样式的一些方法
//想让获取的css样式换成纯数字类型的
function getCss(ele,attr){
    var value = null;
    if('getComputedStyle' in window){
        value =  getComputedStyle(ele)[attr];
    }else{
        value =  ele.currentStyle[attr];
    }
    // let reg = /^(width|height|padding|margin|left|right|top|bottom|fontSize|opacity)$/;
    var reg = /^\d{1,}/;
    if(reg.test(value)){    //按照上面一种reg，要换成attr
        value = parseFloat(value);
    }
}
var w = getCss(box,'width');


function setCss(curEle, attr, value) {

    let reg = /^(width|height|padding|margin|left|right|top|bottom|fontSize)$/;
    if (reg.test(attr)) {
        // if (typeof value === 'number') {
        //     value = value + 'px';
        // }
        let num = parseFloat(value);
        curEle.style[attr] = num + 'px'
    }
    curEle.style[attr] = value;
}


function setGroupCss(ele,obj){
    //for in 既可以遍历出私有属性也可以遍历出共有属性
    for(var key in obj){
        setCss(ele,key,obj[key])
    }
}
setGroupCss(ele,{
    'width':300,
    'height':300
})

//
function css(){
    let [ele,attr,value] = arguments;
    if(arguments.length>2){
        setCss(ele,attr,value)
    }else if(typeof value == 'object')({
        setGroupCss(ele,attr,value)
    })
    getCss(ele,attr)
}