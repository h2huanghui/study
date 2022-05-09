import React from 'react';
import myEvent from './index';

const globalEvent = myEvent;
class B extends React.Component {
  state = {
    newParams: '',
  };

  handler = (params) => {
    this.setState({
      newParams: params,
    });
  };

  bindHandler = () => {
    globalEvent.on('someEvent', this.handler);
  };

  render() {
    return (
      <div>
        <button onClick={this.bindHandler}>点我监听A的动作</button>
        <p>A传入的内容是[{this.state.newParams}]</p>
      </div>
    );
  }
}

export default B;
