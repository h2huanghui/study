import React, { Component } from 'react';

const withMouse = (Component) => {
  class withMosuseComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    render() {
      return (
        <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  }
  return withMosuseComponent;
};

const App = (props) => {
  const { x, y } = props.mouse; //接收mouse属性
  return (
    <div>
      <h1>
        The mouse position is ({x},{y})
      </h1>
    </div>
  );
};

export default withMouse(App); //返回高阶函数
