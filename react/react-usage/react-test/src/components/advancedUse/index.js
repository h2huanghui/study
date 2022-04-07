import React, { Component } from 'react';
// import UnControlledDemo from './UnControlledDemo';
import HOCDemo from './HOCDemo';

class AdvancedUseDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <UnControlledDemo /> */}
        <HOCDemo />
      </div>
    );
  }
}

export default AdvancedUseDemo;
