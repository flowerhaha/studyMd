let data = null;
let wrapper = document.getElementById('wrapper');
let list = document.getElementById('list');
let timer;
let tips = list.getElementsByTagName('li');  //有映射功能,可以时时更新
let outer = document.getElementById('outer');
let right = document.getElementById('right');
let left = document.getElementById('left');
let getData = ()=>{
    let xhr = new XMLHttpRequest;
    xhr.open('get','./banner.json',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
            data = JSON.parse(xhr.responseText);
            // consoxle.log(data);
            readerHtml(data);
        }
    }
    xhr.send();
}
getData();
function readerHtml(data){
    let wrappeItem = '';
    let focusItem = '';
    for(let i = 0;i < data.length;i++){
        wrappeItem += `<li><img src="${data[i].img}" alt=""></li>`;
        focusItem += '<li></li>';
    }
    wrappeItem += `<li><img src="${data[0].img}" alt=""></li>`;   //只是给页面添加了，data的length还是4
    wrapper.innerHTML = wrappeItem;
    list.innerHTML = focusItem;
}
let step = 0;   //初始化图片的索引
function autoMove(){
    step++; 
    if(step >= data.length+1){
        wrapper.style.left = 0;
        step = 1;
    }
    changeFocus();
    utils.animate(wrapper,{left: -800*step},500);
}
timer = setInterval(autoMove,1000);
//焦点跟随
function changeFocus(){
    for(let i = 0;i < tips.length ; i++){
        if(step === i){
            tips[i].classList.add('active');
        }else{
            tips[i].classList.remove('active');
        }
    }
    if(step === 4){
        tips[0].classList.add('active');
    }
}
changeFocus();

outer.onmouseover = function(){
    clearInterval(timer);
}
outer.onmouseout = function(){
    timer = setInterval(autoMove,1000);
}
//点击
for(let i = 0; i < tips.length; i++){
    console.log(i);
    tips[i].onclick = function(){
        console.log(1111);
        step = i-1;
        autoMove();
    }
}
right.onclick = utils.debounce(autoMove,200);
left.onclick = function(){
    step -= 2;
    if(step === -2){
        wrapper.style.left = -data.length*800 + 'px';
        step = data.length-2;
    }
    autoMove();
}
