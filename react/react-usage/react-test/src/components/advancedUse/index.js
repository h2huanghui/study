import React, { Component } from 'react';
// import UnControlledDemo from './UnControlledDemo';
import HOCDemo from './HOCDemo';
import RenderPropsDemo from './RenderPropsDemo';

class AdvancedUseDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <UnControlledDemo /> */}
        {/* <HOCDemo a='123' /> */}
        <RenderPropsDemo />
      </div>
    );
  }
}

export default AdvancedUseDemo;
