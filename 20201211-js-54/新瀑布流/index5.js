let uls = [].slice.call(document.getElementsByTagName('ul'));
//uls = Array.from(uls);  重新赋值空间地址，没有映射功能    只有原生的才有映射功能
//document.querySelectorAll   获取的元素没有映射功能
let imgs = document.getElementsByClassName("bg");
//let imgs = document.querySelectorAll(".bg");   //用这种没有映射功能,不行
// let winH = utils.win("clientHeight");
let back = document.getElementById('back');
function getData(){
    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open('get','./data.txt',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
            data = JSON.parse(xhr.responseText);
            // console.log(data);
            bindHtml(data);
            delay();
        }
    }
    xhr.send();
}
getData();
function bindHtml(data){
    for(let i=0;i<20;i++){
        let index = Math.round(Math.random()*9);
        let curImg = data[index];
        let li = document.createElement('li');
        let p = document.createElement("p");
        let img = document.createElement("img");
        p.innerText = curImg.title;
        img.setAttribute('true-img',curImg.src);
        img.className = "bg";
        img.style.height = Math.round(Math.random()*(300-160)+160)+"px";
        li.appendChild(img);
        li.appendChild(p);
        uls.sort((a,b)=>{
            return a.scrollHeight - b.scrollHeight;
        });
        uls[0].appendChild(li);
    }   
}
//图片懒加载
function delay(){
    for(let i = 0;i<imgs.length;i++){
        delayImg(imgs[i]);
    }
}
function delayImg(img){
    //对每一张图片进行是否显示的逻辑判断
    let imgH = img.offsetHeight;
    let imgT = utils.offset(img).top;
    let winS = utils.win("scrollTop");
    let winH = utils.win("clientHeight");
    if(winH+winS >= imgH+imgT){
        //先获取真实路径，然后创建一个img元素，利用img元素去校验当前的路径是否正确，如果正确，那当前img元素的onload对应的函数就会执行，
        //如果onload执行了，咱们在onload对应的函数里把正确的路径再赋值给页面上的img元素就好
        let trueScr = img.getAttribute('true-img');
        // let newImg = document.createElement("img");
        let newImg = new Image;
        newImg.src = trueScr;
        newImg.onload = function(){
            img.src = trueScr;
            img.className = "";
            // img.className = 'bg';
            // img.classList.remove("bg");
            fadeIn(img);
        }
    }
}
// delay();
function fadeIn(img){
    img.style.opacity = 0;
    let newO = Number(img.style.opacity);
    let timer = setInterval(()=>{
        newO += 0.03;
        img.style.opacity = newO;
        if(newO >= 1){
            clearInterval(timer);
        }
    },17)
}
function isLoad(){
    //函数就是判断当前数据是否需要继续加载
    let winH = utils.win("clientHeight");
    let winS = utils.win("scrollTop");
    let imgS = utils.win('scrollHeight');
    if(winH+winS+100 >= imgS){
        getData();
    }
}
back.onclick = function(){
    //移动距离是100
    //把100分成50份
    //让定时器没运行一次就走50份之一，每运行一次需要20毫秒
    let distance = utils.win('scrollTop');
    let step = distance/50;
    let timer = setInterval(()=>{
        distance -= step;
        utils.win('scrollTop',distance);
        if(distance<=0){
            clearInterval(timer);
        }
    },20)
}
function isBack(){
    let winS = utils.win('scrollTop');
    let winH = utils.win('clientHeight');
    if(winS >= winH){
        // utils.css(back,'display','block')
        back.style.display = "block"
    }else{
        // utils.css(back,'display','none')
        back.style.display = "none"
    }
}
window.onscroll = function(){
    delay();
    isLoad();
    isBack();
}