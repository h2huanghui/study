import React, { Component } from 'react';
// import JSXBaseDemo from './JSXBaseDemo';
import EventDemo from './EventDemo';

class BaseUseDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <JSXBaseDemo /> */}
        <EventDemo />
      </div>
    );
  }
}

export default BaseUseDemo;
