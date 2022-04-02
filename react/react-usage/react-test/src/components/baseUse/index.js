import React, { Component } from 'react';
// import JSXBaseDemo from './JSXBaseDemo';
// import EventDemo from './EventDemo';
// import PropsDemo from './PropsDemo'
import StateDemo from './StateDemo';

class BaseUseDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <JSXBaseDemo /> */}
        {/* <EventDemo /> */}
        {/* <PropsDemo /> */}
        <StateDemo />
      </div>
    );
  }
}

export default BaseUseDemo;
