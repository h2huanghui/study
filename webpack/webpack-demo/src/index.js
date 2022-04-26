//引入css
import './style/style1.css';
import './style/style2.less';

import { sum } from './math';

//引入第三方模块
import _ from 'lodash';
console.log(_.each);

const sumRes = sum(10, 20);
console.log('sumRes', sumRes);

console.log('window.ENV', ENV);

//引入图片
function insertImgElem(imgFile) {
  const img = new Image();
  img.src = imgFile;
  document.body.appendChild(img);
}

import imgFile1 from './img/1.jpg';
insertImgElem(imgFile1);
