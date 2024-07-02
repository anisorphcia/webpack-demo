import img from './sky.jpg';  // 原生js 不支持 import 导入图片
console.log(img);

var dom = `<img src='${img}' />`;
window.onload = function () {
  document.getElementById('main').innerHTML = dom;
}

