var name = "WINDOW";
    function fn() {
        console.log(this.name);
    }
    var obj = {
        name: "OBJ",
        fn: () => {
            console.log(this.name);
        }
    };
    fn();       //-------------- "WINDOW"
    obj.fn();   // 箭头函数没有this,向全局找 是window  "WINDOW"  
    fn.call(obj); //--------------"OBJ"
    window.onload = function () { //页面加载完成，事件就会触发
        fn();      //------------- "WINDOW"
        obj.fn(); // --------------"WINDOW"
    };
    fn.bind(obj); //---------------- function fn() {console.log(this.name);}