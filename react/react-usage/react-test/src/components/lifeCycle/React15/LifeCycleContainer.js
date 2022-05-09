import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './LifeCycle';

class LifeCycleContainer extends React.Component {
  //state可以这样用属性声明的形式初始化
  state = {
    text: '父组件的文本',
    ownText: '仅仅和父组件有关的文本',
    hideChild: false,
  };

  changeText = () => {
    this.setState({
      text: '修改后父组件的文本',
    });
  };

  changeOwnText = () => {
    this.setState({
      ownText: '修改后父组件的自有文本',
    });
  };

  hideChild = () => {
    this.setState({
      hideChild: true,
    });
  };

  render() {
    return (
      <div>
        {/* 新的button按钮 */}
        <button onClick={this.changeOwnText} className='changeText'>
          修改父组件自有文本内容
        </button>
        <button onClick={this.changeText}>修改父组件的文本</button>
        <button onClick={this.hideChild}>隐藏子组件</button>
        <p> {this.state.ownText} </p>
        {this.state.hideChild ? null : <LifeCycle text={this.state.text} />}
      </div>
    );
  }
}

export default LifeCycleContainer;
