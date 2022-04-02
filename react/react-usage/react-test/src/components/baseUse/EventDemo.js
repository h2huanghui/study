import React, { Component } from 'react';

class EventDemo extends Component {
  constructor(props) {
    super(props);
    //对应vue data
    this.state = {
      name: 'hh',
    };
    //修改方法的this指向,只执行一次bind(性能优化小点)
    this.clickHandler1 = this.clickHandler1.bind(this);
  }
  render() {
    // return <p onClick={this.clickHandler1}>{this.state.name}</p>;
    // return <p onClick={this.clickHandler2}>{this.state.name}</p>;
    return (
      <a href='//www.baidu.com' onClick={this.clickHandler3}>
        Click Me
      </a>
    );
  }
  //普通class方法
  clickHandler1() {
    console.log('this...', this); //this默认是undefined
    this.setState({
      name: 'lvh',
    });
  }
  //静态方法 this指向当前实例
  clickHandler2 = () => {
    this.setState({
      name: 'lvhh',
    });
  };

  //注意，event其实是React封装的，可以看 __proto__.constructor是SyntheticEvent 组合事件 模拟出DOM事件所有的能力
  clickHandler3 = (event) => {
    event.preventDefault(); //阻止默认行为
    event.stopPropagation(); //阻止冒泡
    console.log('target', event.target); //指向当前元素，即当前元素触发
    console.log('current target', event.currentTarget); //指向当前元素 假象！！！
    console.log('event', event); //不是原生的event
    console.log('event __proto__.constructor', event.__proto__.constructor);
    console.log('event nativeEvent', event.nativeEvent); //原生事件对象
    console.log('event nativeEvent target', event.nativeEvent.target); //指向当前元素
    console.log(
      'event nativeEvent currentTarget',
      event.nativeEvent.currentTarget
    ); //所有的事件，都被挂载到document上
  };
}

export default EventDemo;
