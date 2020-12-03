// continue break 
for(var i=0;i<10;i++){
    if(i<5){
       i++;//
       continue;
    }
    if(i>7){
       i+=2;
       break;
    }
    i+=1;
}
console.log(i); //10
/*
解析：i=0,执行if<5,i++为1，再执行for循环i++,为2;
i=2,执行if<5,i++为3，再执行for循环i++,为4;
........
*/

for(var i=1;i<=10;i+=2){
    if(i<=5){
       i++;//
       continue;
    }else{
       i-=2;
       break;
    }
    i--;
    console.log(i);
    
}
console.log(i);//5，打印一次