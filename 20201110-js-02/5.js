var num=6;
// if(num==5){
//     num++;
// }else if(num==6){
//     num--;
// }else {
//     num=0;
// }

// console.log(num);

/* switch case操作语句 */
//switch case 中的break 表示条件终止，如果不加break 的时候，会继续往下执行。
switch(num){
    case 5:
    num++;
    break;
    case 6:
    num--;
    break;
    default:
    num=0;
}
console.log(num);

/*
2、switch case 和if elese 的区别
如果把上面的案例，num的值改为字符串的6，用if else  和switch case 会出现什么样的结果呢，答案是否还相同呢？
在if  else 条件判断中，两个== 进行比较的时候，如果数据类型不同，会先转换为相同的数据类型再比较
在switch case 中，条件判断 其实是三个===，绝对等于，不仅要值相同，类型也要相同，所以才会出现上面不同的情况。
*/

