/*
检测数据类型的四种类型：
1、typeof
    返回值一定是字符串：
    + “string”
    + "number"
    + "boolean"
    + "undefined"
    + "object"
    + "function"
    特殊记忆：typeof null ==>"object"

2、instanceof
3、constructor
4、Object.protoype.toString.call()

*/

/*
    面试题：
*/
typeof []  //"object"
typeof typeof [] //"string"