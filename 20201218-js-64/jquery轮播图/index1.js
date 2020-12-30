(function(){
    let data = null;
    let timer;
    let step = 0;
    let length;
    let getData = () => {
        $.ajax({
            url: 'banner.json',
            type: 'get',
            async: false,
            success: (res) => {
                // console.log(res);
                data = res;
                length = data.length;
            }
        })
    }
    getData();
    let bindHtml = () => {
        let imgs = '';
        let lis = '';
        $(data).each(function(index,item){
            imgs += `<img src="${item.img}" alt="">`;
            lis += `<li></li>`;
        })
        $('#wrapper').html(imgs);
        $('#list').html(lis);
    }
    bindHtml();
    //启动定时器完成轮播
    let autoMove = () => {
        step++;
        if(step === 5){
            step = 0;
        }
        changeFocus();
        $('img').eq(step).fadeIn().siblings().fadeOut();
    }
    timer = setInterval(autoMove,1000);

    //焦点跟随
    let changeFocus = () => {
        $('#list li').eq(step).addClass('select').siblings().removeClass('select');
        //get: 获取的是原生版的元素
        //eq：获取的是jq版的元素
    }
    changeFocus();

    //
    $('#outer').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(autoMove,1000);
    })

    $('#list li').hover(function(){
        // console.log($(this).index());
        step = $(this).index() - 1;
        autoMove();
    })

    $('#right').click(function(){
        autoMove();
    })
    $('#left').click(function(){
        step -= 2;
        if(step === -2){
            step = length - 2; //3
        }
        autoMove();
    })
})()

//等dom加载完成之后就会执行
//$(document).ready(function{})


//window.onload = function({})