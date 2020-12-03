var obj = {
    name: "lili"
}

Object.prototype.hasPublicPro = function(attr){
    if(attr in this && !this.hasOwnProperty(attr)){
        return true;
    }
    return false;
}
console.log(obj.hasPublicPro("name"));