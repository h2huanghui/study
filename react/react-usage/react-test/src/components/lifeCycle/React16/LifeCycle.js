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

  // 初始化/更新时调用(派生state不仅在更新时存在，初始化的时候也存在)
  static getDerivedStateFromProps(props, state) {
    //报错!!! getDerivedStateFromProps是静态方法，不依赖组件实例而存在，在这个方法内部是访问不到this的
    // console.log(this.props);
    console.log('props state', props, state);
    console.log('getDerivedStateFromProps方法执行');
    //返回值不可或缺。使用父组件的props来更新当前组件的state
    return {
      fatherText: props.text,
    };
  }

  //初始化渲染时调用(渲染结束后被触发,真实DOM已经挂载到页面上)
  componentDidMount() {
    console.log('componentDidMount方法执行');
  }

  //组件更新时调用 (性能优化！！！，默认值为true)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate方法执行');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate方法执行');
    return 'haha';
  }

  //组件更新后调用
  componentDidUpdate(preProps, prevState, valueFromSnapshot) {
    console.log('componentDidUpdate方法执行');
    console.log('从getSnapshotBeforeUpdate获取到的值是', valueFromSnapshot);
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
