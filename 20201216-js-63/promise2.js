console.log(100);
let p1 = new Promise((resolve, reject) => {
  console.log(800);
  setTimeout(() => {
    console.log(700);
    resolve()
  });
  reject();
});
console.log(200);
p1.then(()=>{
  console.log(300);
},()=>{
  console.log(400);
});
console.log(500);

//1 8 2 5 4 7

//then里面执行的都是异步
//promise的状态有两种：pedding-》fulfilled    pedding-》rejected
// 这两种情况变成其中的一种，状态就会凝固，就不会再改变了，所以当reject()执行的时候，resolve就不会再执行了