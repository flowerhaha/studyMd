/*匹配密码
6-16位
有数字、字母、下划线组成
*/
let reg = /^\w{6,16}$/;
function regFn(code){
    if(code.length < 6 || code.length > 16){
        alert('密码位数不对');
        return;
    }
    let str = 'adasdf1234567890_';
    code.split().forEach(function(item){
        if(){

        }
    })
}
regFn('scdsvfvf')