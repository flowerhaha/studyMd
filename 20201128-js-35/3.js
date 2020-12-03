var name="window";
var Tom={
    name:"Tom",
    show:function(){ 
        console.log(this.name);
    },
    wait:function(){
        var fun=this.show;
        fun(); //this 指的是window
    }
};
Tom.wait();