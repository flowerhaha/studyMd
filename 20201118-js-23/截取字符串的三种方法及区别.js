var str = "abcd"
str.slice(0); //abcd
str.substring(0,1); //a   //从索引0开始，到索引1结束，不包含索引1，返回的就是查找的字符
str.substr(0,2); //ab     //从索引0开始，截取两个字符，第二个参数代表的是个数

// 删除数组的最后一项
ary.pop();
ary.splice(ary.length-1,1);
ary.legnth--;

// 增加数组的最后一项
ary.push();
ary.splice(ary.length,0,x);
ary[ary.length]=x;