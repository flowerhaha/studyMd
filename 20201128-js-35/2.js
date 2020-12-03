var fullName="languge";
var obj={
    fullName:'javascript',
    prop:{
        getFullName:function(){
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); //this指的是obj.prop   //undefined
var test=obj.prop.getFullName;
console.log(test()); //this指的是window   //languge