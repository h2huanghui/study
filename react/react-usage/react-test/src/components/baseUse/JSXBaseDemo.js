import React, { Component } from 'react';

class JSXBaseDemo extends Component {
  constructor(props) {
    super(props);
    //对应vue data
    this.state = {
      name: 'hh',
      imgUrl: 'http://www.baidu.com',
      flag: true,
    };
  }
  render() {
    //获取变量 对应vue插值{{xxx}}
    // const pElem = <p>{this.state.name}</p>;
    // return pElem;

    //表达式
    // const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>;
    // return exprElem;

    // const imgElem = (
    //   <div>
    //     <p>我的头像</p>
    //     {/*  */}vue 动态属性:src
    //     {/* <img :src='imgUrl' alt='' /> */}
    //     <img src='xxxx.png' alt='' />
    //     <img src={this.state.imgUrl} alt='' />
    //   </div>
    // );
    // return imgElem;

    //style
    // const styleData = { fontSize: '30px', color: 'red' };
    // const styleElem = <p style={styleData}>test</p>;
    // return styleElem;

    // //原生html
    // const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>';
    // const rawHtmlData = {
    //   __html: rawHtml,
    // };
    // const rawHtmlElem = (
    //   <div>
    //     <p dangerouslySetInnerHTML={rawHtmlData}></p>
    //     <p>{rawHtml}</p>
    //   </div>
    // );
    // return rawHtmlElem;

    //加载组件
    const componentElem = (
      <div>
        <p>JSX 中加载一个组件</p>
        <hr />
      </div>
    );
    return componentElem;
  }
}

export default JSXBaseDemo;
