let promise = new Promise((resolve,reject)=>{
    //resolve执行会把当前promise变成成功态
    //reject执行会把当前的promise变成失败态
    //promise执行的时候一般都会写一个异步操作，当异步操作成功之后去把promise的状态改为成功态，当异步操作失败之后，把当前promise的状态改为失败态

    //
    $ajax({

    })
})
promise.then(()=>{
    //此函数为resolve执行成功之后执行该函数
    //此函数为异步操作
},()=>{
    //如果当前promise的状态是失败态，此函数执行
    //异步操作
})