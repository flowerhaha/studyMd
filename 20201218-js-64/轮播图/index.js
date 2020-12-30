let outer = document.getElementById('outer');
let wrapper = document.getElementById('wrapper');
let list = document.getElementById('list');
let data = null;
function getData(url){
  let xhr = new XMLHttpRequest();
  xhr.open('get',url,false);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
      data = JSON.parse(xhr.responseText);
    }
  }
  xhr.send();
  // console.log(data);
  renderHtml(data);
}
getData('./banner.json');
function renderHtml(data){
  let wrapperItems = '';
  let listItems = '';
  data.forEach((item,index) => {
    wrapperItems += `<li><img src="${item.img}" alt=""></li>`;
    listItems += `<li></li>`;
  })
  //再复制一张图片放到末尾（让第一张和最后一张一样）
  wrapperItems += `<li><img src="${data[0].img}" alt=""></li>`
  wrapper.innerHTML = wrapperItems;
  list.innerHTML = listItems;
}
let step = 0;
let timer = null;
function autoMove(index){
  step++;   //1 2 3 4 5
  typeof index === 'undefined' ? null : step=index;  //此函数当定时器执行的时候没有传参，要判断index是不是undefined
  if(step >= data.length+1){  //5
    wrapper.style.left = 0;
    step = 1;
  }
  changeFocus();  //图片一动，焦点触发
  utils.animate(wrapper,{left:-step*800},500)
}
 timer = setInterval(autoMove, 2000);

//用户鼠标划上outer轮播停止，鼠标离开，轮播继续
outer.onmouseover = function(){
  clearInterval(timer);
}
outer.onmouseout = function(){
  timer = setInterval(autoMove, 2000);
}
//实现焦点跟随
let lis = [].slice.call(list.getElementsByTagName('li'));
function changeFocus(){
  //切换焦点的显示
  //循环所有的焦点，判断一下当前的step和哪个焦点的索引相等，和谁相等就给谁加上active类名，其余的清除active类名
  //如果当前的step是4，说明当前页面显示的是最后一张图片，他和第一张图片公用一个焦点，这时候让第一个焦点高亮就可以了
  lis.forEach((item,index) => {
    if(step === index){
      item.classList.add('active');
    }else{
      item.classList.remove('active');
    }
  })
  step === data.length ? lis[0].classList.add('active') : null;
}
changeFocus(); //页面初始化的时候执行一次，此时step=0，让第一张图片的焦点高亮

//点击焦点，实现切换对应的图片
function bindClick(){
  for(let i=0;i<lis.length;i++){
    lis[i].onclick = function(){
      // console.log(i); // 1
      // step = i - 1;  //因为autoMove内部有step++，所以在这里要减1，这样就会跟autoMove内部的step++相互抵消
      // autoMove();

      //两种方式
      autoMove(i);
    }
  }
}
bindClick()

//点击小耳朵实现图片切换
right.onclick = function(){
  autoMove();
}
left.onclick = function(){
  step -= 2;   //向左切换的时候，需要-1，但是autoMove函数里面有step++,所以需要-2
  if(step === -2){
    wrapper.style.left = data.length*(-800) + 'px';  //-3200
    step = data.length - 2;  //2
  }
  autoMove();
}