//把类数组转为数组
//----1
function fn(){
    var res = [...arguments];
    console.log(res);
}
fn(1,2,3);


//-----2
//Array.from()  把类数组转为数组
function fn(){
    var res = Array.from(arguments);
    console.log(res);
}
fn(1,2,3);


//------3
function toArray(likeArray){
    var newAry = [];
    for(var i=0;i<likeArray.length;i++){
        newAry.push(likeArray[i]);
    }
    return newAry;
}


Array.prototype.slice = function(){
    var newAry = [];
    for(var i=0;i<this.length;i++){
        newAry.push(this[i]);
    }
    return newAry;
}
var ary = [1,2,3,4,5];
var res = ary.slice();

//------4
function fn(){
    // var res = Array.prototype.slice.call(arguments);
    var res = [].slice.call(arguments);
    console.log(res);
}
fn(1,2,3);

