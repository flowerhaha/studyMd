var a = 6;
function fn(a){
    a=1;
    console.log(a);
}
fn(a);
console.log(a);


function fn(){
    a=3;
    console.log(a); //3
}
fn();
console.log(a); //3
console.log(window.a); //3