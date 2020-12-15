let uls = [].slice.call(document.getElementsByTagName("ul"));
let imgs = document.getElementsByClassName("bg");
let data = null;
let page = 1;
function getData(num){
    let xhr = new XMLHttpRequest;
    xhr.open('get','./data.txt?page='+num,false);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)){
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    // console.log(data);
    bindHtml(data);
}
getData(page);
function bindHtml(data){
    for(let i=0;i<20;i++){
        let index = Math.round(Math.random()*9);  //随机产生0-9之间的整数
        let curImg = data[index];  //从data中随机获取一张图片的信息
        // console.log(curImg);
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.setAttribute('true-img',curImg.src);
        img.className = "bg";
        img.style.height = Math.round(Math.random()*(300-160)+160)+'px';
        let p = document.createElement("p");
        p.innerText = curImg.title;
        li.appendChild(img);
        li.appendChild(p);
        uls.sort(function(a,b){
            return a.scrollHeight - b.scrollHeight;
        });
        uls[0].appendChild(li);
    }
}
function delay(){
    for(let i=0;i<imgs.length;i++){
        delayImg(imgs[i]);
    }
}
function delayImg(img){
    let imgT = img.offsetHeight;
    let imgST = utils.offset(img).top;
    let winCT = utils.win('clientHeight');
    let winST = utils.win('scrollTop');
    if(winCT+winST>=imgT+imgST){
        let trueSrc = img.getAttribute("true-img");
        let newImg = new Image;
        newImg.src = trueSrc;
        newImg.onload = function(){
            img.src = trueSrc;
            img.className = "";
        }
    }
}
delay();
function isLoad(){
    //去判断当前图片是否继续分页请求
    let winCT = utils.win("clientHeight");
    let winST = utils.win('scrollTop');
    let bodyH = utils.win('scrollHeight');
    if(winCT+winST+100 >= bodyH){
        getData();
    }
}
window.onscroll = function(){
    delay();
}