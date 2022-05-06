import React from 'react';
import PropTypes from 'prop-types';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {/* 将 当前的state作为props,传递给render */}
        {this.props.render(this.state)}
      </div>
    );
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
}

Mouse.propTypes = {
  render: PropTypes.func.isRequired, //必须接收一个render函数
};

const App = (props) => (
  <div style={{ height: '500px' }}>
    <p>{props.a}</p>
    <Mouse
      render={
        //render是一个函数组件
        ({ x, y }) => (
          <h1>
            The mouse position is ({x},{y})
          </h1>
        )
      }
    />
  </div>
);

export default App;
