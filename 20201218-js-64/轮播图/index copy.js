let wrapper = document.getElementById('wrapper'); // 获取图片的外层ul
let list = document.getElementById('list');
let outer = document.getElementById('outer');

// 进行数据请求
let data = null;

function send() {
  let xhr = new XMLHttpRequest;
  xhr.open('get', './banner.json', false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      data = JSON.parse(xhr.response)
    }
  }
  xhr.send()
}
send();

// 动态绑定数据
function render() {
  let wrappers = '';
  let focus = '';
  data.map((item, index) => {
    wrappers += `<li><img src="${item.img} " alt=""></li>`;
    focus += '<li></li>'
  });
  wrappers += `<li><img src="${data[0].img} " alt=""></li>`;
  wrapper.innerHTML = wrappers;
  list.innerHTML = focus;
}
render();

// 3.实现自动轮播，每隔2000ms执行一次
let step = 0;
let autoMove = function (index) {
  step++;
  typeof index === 'undefined' ? null : step = index;
  if (step >= data.length + 1) { // 5 
    // 当step等于5的时候说明已经没有图片了，这时候应该把left马上改为0，就从最后一张图片切换到第一张了，(而且最后一张和第一张一样，所以看不出来)
    wrapper.style.left = 0 + 'px';
    step = 1

  }
  changeTip()
  utils.animate(wrapper, { left: -800 * step }, 1000)
}
let timer = setInterval(autoMove, 2000);

// 4.鼠标划上图片停止轮播 鼠标离开继续轮播
outer.onmouseover = function () {
  clearInterval(timer)
}
outer.onmouseout = function () {
  timer = setInterval(autoMove, 2000);
}
// 实现焦点跟随，显示哪一张图片，就给对应的焦点li加上类名active
let focuss = document.querySelectorAll('#list li');
function changeTip() {
  for (let i = 0; i < focuss.length; i++) {
    // focuss[i] 代表每一个焦点
    if (i === step) {
      focuss[i].classList.add('active')
    }
    else {
      focuss[i].classList.remove('active')
    }
    // step最大是4，但是焦点的索引最大是3，如果step是4的时候，说明页面显示的是最后一张图片
    if (step === data.length) {
      focuss[0].classList.add('active')
    }
  }
}
changeTip();


// 点击焦点，实现图片跟随
let follow = () => {
  for (let i = 0; i < focuss.length; i++) {
    focuss[i].onclick = function () {
      autoMove(i)
    }
  }
}
follow();

// 点击左右小耳朵，实现图片的切换
right.onclick = utils.ss(function () {
  autoMove()
},1000);

left.onclick = function () {
  // 假设现在的step是2，那显示的是第三张图片
  
  step -= 2; // 因为autoMove里会对step++一次，所以这减等于2
  if (step === -2) {
    // 如果当前的step是负数，那就说明已经点击到最左侧了，先让图片回到最后一张，然后在回到倒数第二张
    wrapper.style.left = (data.length) * -800 + 'px';
    step = 2;
  }
  autoMove();
}