let p1 = new Promise((resolve,reject)=>{
    // $.ajax({
    //     url: './data1.json',
    //     success: (res) => {
    //         resolve(res)
    //     },
    //     fail: () => {
    //         reject()
    //     }
    // })
    setTimeout(() => {
        resolve()
        // reject()
    })
});
p1.then(() => {
    console.log('第一次成功');
    return new Promise((resolve,reject) => {
        reject()
    })
},() => {
    console.log('第一次失败');
}).then(() => {
    console.log(500);
},()=>{
    console.log('第2次失败');
}).then(()=>{
    console.log(600);
})
//返回 '第一次成功' '第2次失败 600

//当前then中的回调函数执行的时候如果没有返回promise的实例，那下一个then中的成功的回调函数（第一个回调函数）会默认执行
//当前then中的回调函数执行的时候如果返回promise的实例了，那下一个then中的回调函数的执行就由当前的这个promise的实例的状态来管控