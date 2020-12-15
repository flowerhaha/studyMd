let utils = (function () {
  function offset(ele) {
    let left = ele.offsetLeft;
    let top = ele.offsetTop;
    let parent = ele.offsetParent; 
    while (parent !== document.body) { 
      left += (parent.offsetLeft + parent.clientLeft);
      top += (parent.offsetTop + parent.clientTop);
      parent = parent.offsetParent;
    }

    return {
      left,
      top
    }

  }
  function win(attr,value){
    if(value == undefined){
      return document.documentElement[attr] || document.body[attr]
    }
    document.documentElement[attr] = value;
    document.body[attr] = value;
  }
  return {
    offset,
    win
  }
})()