// 详细输出
var box=document.getElementById("box");
console.dir(box);
// 弹框的时候，会把数据转为字符串
var obj={name: "lilis"};
//alert(obj); //==> [object object]   相当于调用obj.tostring(); ==>结果是[object object]

// 提示框:点击确定返回值为true，点击取消为false
var res1=confirm("你准备好了么");
console.log(res1);
// 带输入的提示框
var res2=prompt("你是男孩还是女孩");
console.log(res2);
