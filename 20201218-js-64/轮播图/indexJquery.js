// let data = null;
let length = 0;
let send = ()=>{
    $.ajax({
        url:'banner.json',
        type: 'get',
        async: false,
        success: function(data){
            // console.log(data);
            length = data.length;
            bindHtml(data);
        }
    })
}
send();
function bindHtml(data){
    let wrapperItems = '';
    let listItems = '';
    $(data).each((index,item) => {
        wrapperItems += `<li><img src="${item.img}" alt=""></li>`;
        listItems += ` <li></li>`;
    })
    wrapperItems += `<li><img src="${data[0].img}" alt=""></li>`
    $('#wrapper').html(wrapperItems);
    $('#list').html(listItems);
}
let step = 0;
let timer = null;
function autoMove(index){
    step++;
    typeof index === 'undefined'?null:step = index;
    if(step >= length+1){
        $('#wrapper').css('left',0);
        step =1;
    }
    changeFocus();
    $('#wrapper').animate({left:-step*800},'fast');
}
timer = setInterval(autoMove,1000);
//用户鼠标划上outer轮播停止，鼠标离开，轮播继续
// $('#outer').mouseover(function(){
//     clearInterval(timer);
// })
// $('#outer').mouseout(function(){
//     timer = setInterval(autoMove, 2000);
// })
$('#outer').hover(function(){
    clearInterval(timer);
},function(){
    timer = setInterval(autoMove, 2000);
})
//实现焦点跟随
function changeFocus(){
    $('#list li').removeClass('active');
    if(step === length){
        $('#list li').eq(0).addClass('active')
    } else {
        $('#list li').eq(step).addClass('active')
    }
}
changeFocus();
//点击焦点，实现切换对应的图片
function bindClick(){
    $('#list li').click(function(){
        // console.log($(this).index());
        autoMove($(this).index());
    })
}
bindClick();
//点击小耳朵实现图片切换
$('#right').click((function(){
    autoMove();
}))
$('#left').click(function(){
    step -= 2;
    if(step === -2){
        $('#wrapper').css('left',-length*800+'px');
        step = length-2;
    }
    autoMove();
})