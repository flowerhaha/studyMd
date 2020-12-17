var print = function () {
    alert(1);
};

function Fn() {
    print = function () {
        alert(2);
    };
    return this;
};

function print() {
    alert(3);
};
Fn.prototype.print = function () {
    alert(4);
};
Fn.print = function () {
    alert(5);
};

print();  //------------- 1
Fn.print();  //---------- 5
Fn().print(); //--------- 2
new Fn.print(); //------- 5   有两种：一种是new Fn 为无参数列表；一种是先算new Fn.print()    new (带参数列表)  它优先级高  先算Fn.print   假设为A    new A();
new Fn().print();//------ 4