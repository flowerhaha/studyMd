
function fn(callback){
    console.log(this);  //window
    callback();
}
fn(function(){
    console.log(this);  //window   此为回调函数
})