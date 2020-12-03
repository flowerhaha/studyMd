function fn(){
    n=3;
 }
 var n=2;
 fn();
 console.log(n); 


 function fn(){
    console.log(n);
  }
  var n=2;
  fn();
  console.log(n); 


  console.log(fn(1,2));
  function fn(n,m){
      return n+m;
   }
  console.log(fn(1,2));


console.log(a);
if(1==2){
  var a=12;
}
console.log(a);


console.log(fn);
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn);


console.log(fn()); 
console.log(fn);
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn);


// 360面试题
f=function(){
    return true;
};
g=function(){
    return false;
};
~function(){
 if(g()&&[]==![]){
     f=function(){return false;};
     function g(){
         return true;
     }
 }
}();
console.log(f());
console.log(g());


console.log(fn);
if(1==1){
   console.log(fn);
   function fn(){
       console.log("ok");
   }
}
console.log(fn)


var a=0;
console.log(a);
function a(){}
if(true){
    console.log(a);
    a=1;
    console.log(a);
    function a(){}
    a=21;
    console.log(a);
}
console.log(a);


console.log(fn);
console.log(fn(1,2));
var fn=function (n,m){
    return n+m;
 }
console.log(fn(3,4));


sum(); 
fn();
var fn=function(){
    console.log(1);
};

function sum(){
    console.log(2);
}

fn();
sum();


console.log(obj.f1);
var obj={
    f1:function(){
       console.log(1)
    }
}


function fn(){
    console.log(f2);
    return function f1(){
    }
    function f2(){
      console.log("f2")
    }
  }
  fn();


console.log(fn)
function fn(){
   console.log(1);
}
function fn(){
   console.log(2);
}
function fn(){
   console.log(3);
}


console.log(fn) 
function fn(){ 
    console.log(1)
}
var fn=2; 
console.log(fn)


console.log(num);
var num = 1;
console.log(num);
var num = 2;
console.log(num);


fn();
function fn(){
    console.log(1);
}
function fn(){
    console.log(2);   
}
fn();
function fn(){
    console.log(3);
}
fn=100;
function fn(){
    console.log(4);   
}
fn();


var a=12,b=13,c=14;
function fn(a){
   console.log(a,b,c); 
   var b=c=a=20;
   console.log(a,b,c);
}
fn(a);
console.log(a,b,c);


let a=10,
b=10;
let fn=function(){
    let a=b=20;
    console.log(a,b);
};
fn();
console.log(a,b);


let a=10,
b=10;
let fn=function(){
    console.log(a);
    let a=b=20; 
    console.log(a,b);
};
fn();
console.log(a,b);


var ary=[12,13];
function fn(ary){
   console.log(ary);
   ary[0]=100;
   ary=[100];
   ary[0]=0;
   console.log(ary);
}
fn(ary);
console.log(ary);


function fn(i){
    return function (n){
       console.log(n+(++i));
    }
}
var f=fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4)


function fn(i){
    return function (n){
       console.log(n+(i++));
    }
}
var f=fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4)


console.log(fn1);
function fn1(){
    console.log(1);
}
console.log(fn1);
function fn1(){
    console.log(2);
}
function fn1(){
    console.log(3);
}
console.log(fn1);
var fn1 = 200;
function fn1(){
    console.log(4);
}
console.log(fn1);
console.log(fn1());


console.log(fn);
if(true){
    console.log(fn);
    fn = 3;
    console.log(fn);
    function fn(){

    }
    fn = 5;
    console.log(fn);
}
console.log(fn);


var a=2;
function fn(){ 
   console.log(a); //2 2
}
function sum(){
  var a=3;
  fn();
}
fn();
sum();


var n=10;
function fn(){
    var n=20;
    function f(){
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x=fn();
x();
x();
console.log(n);


var a = 6;
function fn(a){
    a=1;
    console.log(a);
}
fn(a);
console.log(a);


function fn(){
    a=3;
    console.log(a); 
}
fn();
console.log(a);
console.log(window.a);


console.log(b);
function fn(){
    b=13;
    console.log(b);
}

fn();
console.log(b);


console.log(a,b);
var a=12,
b=12;
function fn(){
    console.log(a,b);
    var a=b=13;
    console.log(a,b);
}
fn();
console.log(a,b);


console.log(a);
var a=12;
function fn(){
    console.log(a);
    var a=13;
}
fn();
console.log(a);



console.log(a);
var a=12;
function fn(){
    console.log(a);
     a=13;
}
fn();
console.log(a);



console.log(a);
 a=12;
function fn(){
    console.log(a);
     a=13;
}
fn();
console.log(a);



var foo=1;
function bar(){
  if(!foo){
    var foo=10;
  }
  console.log(foo);
}
bar();



var n=0;
function a(){
    var n=10;
    function b(){
        n++;
        console.log(n);
    }
    b();
    return b;
}
var c=a();
c();
console.log(n);



var a=10,b=11,c=12;
function text(a){
  a=1;
  var b=2;
  c=3;
  
}
text(10);
console.log(a);
console.log(b);
console.log(c);



if(!("a" in window)){
    var a=1;
    
   }
   console.log(a);



var a=4;
function b(x,y,a){
  console.log(a);
  arguments[2]=10;
  console.log(a);
}
a=b(1,2,3);
console.log(a)



var foo="hello";
(function(foo){
  console.log(foo);
  var foo=foo||"word";
  console.log(foo);
})(foo);
console.log(foo);



var a=4;
function b(x,y,a){
  console.log(a);
  arguments[2]=10;
  console.log(a);
}
a=b(1,2,3);
console.log(a)


var a=9;
function fn(){
  a=0;
  return function(b){
     return b+a++;
  }
}
var f=fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);


let obj={
    name:"li",
    fn:(function(n){
         console.log(this); 
         return function(){
            console.log(this);
         }
    })(10),
  }
  obj.fn();


var num=10;
var obj={num:20};
obj.fn=(function(num){
   this.num=num*3;
   num++;
   return function(n){
       this.num+=n; 
       num++;
       console.log(num);
   }
})(obj.num);
var fn=obj.fn;
fn(5);
obj.fn(10);
console.log(num,obj.num) 


function fn(){
    console.log(this);
}
box.onclick=function(){
  console.dir(this);
  fn()
}


function Fn(){
    this.x=100;
    this.y=200;
    this.getX=function(){
        console.log(this.x);
    }
}
Fn.prototype.getX=function(){
    console.log(this.x);
}
Fn.prototype.getY=function(){
    console.log(this.y);
}
var f1=new Fn;
var f2=new Fn;
console.log(f1.getX==f2.getX);
console.log(f1.getY==f2.getY);
console.log(f1.__proto__.getY==Fn.prototype.getY);
console.log(f1.__proto__.getX==f2.getX);
console.log(f1.getX===Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();


var fullName="languge";
var obj={
    fullName:'javascript',
    prop:{
        getFullName:function(){
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test=obj.prop.getFullName;
console.log(test());


var name="window";
var Tom={
    name:"Tom",
    show:function(){
        console.log(this.name);
    },
    wait:function(){
        var fun=this.show;
        fun();
    }
};
Tom.wait();



function fun(){
    this.a=0;
    this.b=function(){
        alert(this.a);
    }
}
fun.prototype={
    b:function(){
        this.a=20;
        alert(this.a);
    },
    c:function(){
        this.a=30;
        alert(this.a)
    }
};

var my_fun=new fun();
my_fun.b();


var n=2;
var obj={
    n:3,
    fn:(function(n){
      n+=2;
      this.n+=2;
      var n=5;
      return function (m){
         this.n*=2;
         console.log(m+(++n));
      }
    })(n)

};
var fn=obj.fn;
fn(3);
obj.fn(3);
console.log(n,obj.n)


