import React from 'react';
import myEvent from './index';

const globalEvent = myEvent;
class A extends React.Component {
  state = {
    infoToB: 'text from A',
  };

  handleClick = () => {
    globalEvent.emit('someEvent', this.state.infoToB);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我把state传递给B</button>
      </div>
    );
  }
}

export default A;
