// 获取当前盒子距离body的偏移量
// 现在不管你的父级参照物是谁，你就先获取一下当前盒子距离父级参照物的距离然后加上父级参照物的border，
//然后再看看你的父级参照物的父级参照物是不是body，如果不是body就继续上边的累加，如果是那就结束
function offset(ele){
    let eleL = ele.offsetLeft;
    let eleT = ele.offsetTop;
    let parent = ele.offsetParent;
    while(parent !== document.body){
        eleL += (parent.offsetLeft + parent.clientLeft);
        eleT += (parent.offsetTop + parent.clientTop);
        parent = parent.offsetParent;
    }
    return {
        left,
        top
    }
}
offset(ele)


