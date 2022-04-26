//引入css
import './style/style1.css';
import './style/style2.less';

import { sum } from './math';

import moment from 'moment'
import 'moment/locale/zh-cn' // 手动引入中文语言包
moment.locale('zh-cn') // 设置语言为中文
console.log('local',moment.locale())
console.log('data',moment().format('ll'))

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


//引入动态数据 - 懒加载
setTimeout(() => {  
  //定义trunk
  import('./dynamic-data.js').then(res=>{
    console.log(res.default.message)
  })
},1500)