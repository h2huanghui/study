import React, { Component } from 'react';
// import JSXBaseDemo from './JSXBaseDemo';
// import EventDemo from './EventDemo';
import PropsDemo from './PropsDemo'

class BaseUseDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <JSXBaseDemo /> */}
        {/* <EventDemo /> */}
        <PropsDemo />
      </div>
    );
  }
}

export default BaseUseDemo;
