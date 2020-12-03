function C1(name) { 
    if (name) {
        this.name = name;
    }
}
function C2(name) {
    this.name = name;
}
function C3(name) { 
    this.name = name || 'join';
}
C1.prototype.name = 'Tom'; // 给C1类的原型增加属性
C2.prototype.name = 'Tom'; // 给C2类的原型增加属性
C3.prototype.name = 'Tom'; // 给C3类的原型增加属性
alert((new C1().name) + (new C2().name) + (new C3().name));
//Tom undefined join