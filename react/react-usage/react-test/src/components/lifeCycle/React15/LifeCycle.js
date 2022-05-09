import React from 'react';
import ReactDOM from 'react-dom';

//定义子组件
class LifeCycle extends React.Component {
  constructor(props) {
    console.log('进入constructor');
    super(props);
    //state可以在constructor里初始化
    this.state = {
      text: '子组件的文本',
    };
  }
  //初始化渲染时调用 React16废弃
  componenetWillMount() {
    console.log('componenetWillMount方法执行');
  }

  //初始化渲染时调用(渲染结束后被触发,真实DOM已经挂载到页面上)
  componentDidMount() {
    console.log('componentDidMount方法执行');
  }

  //父组件修改子组件props时调用(注意：并不是由 props 的变化触发的，而是由父组件的更新触发的！！！)
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps方法执行');
  }

  //组件更新时调用 (性能优化！！！，默认值为true)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate方法执行');
    return true;
  }
  //组件更新时调用 React16废弃
  componentWillUpdate() {
    console.log('componentWillUpdat方法执行');
  }
  //组件更新后调用
  componentDidUpdate() {
    console.log('componentDidUpdate方法执行');
  }
  componentWillUnmount() {
    console.log('子组件的componentWillUnmount方法执行');
  }

  changeText = () => {
    this.setState({
      text: '修改后的子组件文本',
    });
  };

  render() {
    console.log('render方法执行');

    return (
      <div>
        <button onClick={this.changeText}>修改子组件的文本内容</button>
        <p>{this.state.text}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default LifeCycle;
