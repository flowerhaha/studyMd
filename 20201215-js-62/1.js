var name = 'WINDOW';  //'B' 'B' 'B'
    function A() {
        console.log(1, this.name); //1，B
        name = this.name;  //此步改变全局的name  B
    };
    function B() {
         name = this.name;
        console.log(2, this.name);
    };
    A.call(B, 10);   //-----------------------1 B
    A.call.call.call(B); //-------------------2 B
    Function.prototype.call(B);//-------------不打印
    Function.prototype.call.call.call(B);//---2 B

    //console.dir(A);  里面有一个name:A  

    function call(context,...arg){
        context = context || window;
        context.$fn = this;
        context.$fn(...arg);
    }
   // A.call(B, 10);  context=>B  this=>A   B.$fn()----A();  A执行，this指向B   打印1，B.name   ====>1 B
   // A.call.call.call(B);  context=>B  this=>A.call.call-->call   B.$fn()----call() call第二次执行  context--》window this=>B   window.$fn() = B(); this指window，打印2，
   // Function.prototype.call(B); Function.prototype是一个匿名函数，空函数
   // Function.prototype.call.call.call(B);  context=>B  this=>Function.prototype.call.call-->call   B.$fn()----call()  call第二次执行  context--》window  this=>B  window.$fn() = B();  


   //当出现两个及以上call的时候，call就会执行两次，并且会把给call传递的实参进行执行
   //实参函数执行时内部的this是window