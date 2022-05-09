import React, { Component, useState } from 'react';
// import BaseUse from './components/baseUse';
// import AdvancedUseDemo from './components/advancedUse'
// import ClickCounter from './components/hook/useState';
// import LifeCycles from './components/hook/useEffect';
// import UseRef from './components/hook/useRef';
// import UseContext from './components/hook/useContext';
// import CustomHooksUsage from './components/hook/customHooksUsage';
// import Parent from './components/hook/useStateTrack';
// import UseEffectChangeState from './components/hook/useEffectChangeState';
// import LifeCycleContainer from './components/lifeCycle/React15/LifeCycleContainer';
import LifeCycleContainer from './components/lifeCycle/React16/LifeCycleContainer';
import Parent from './components/EventEmitter/Parent';

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setFlag(false);
          }}
        >
          flag = false
        </button>
      </div>
      {/* <AdvancedUseDemo /> */}
      {/* <ClickCounter /> */}
      {/* {flag && <LifeCycles />} */}
      {/* <UseRef /> */}
      {/* <UseContext /> */}
      {/* {flag && <CustomHooksUsage />} */}
      {/* <Parent /> */}
      {/* {flag && <UseEffectChangeState />} */}
      {/* <LifeCycleContainer /> */}
      <Parent />
    </div>
  );
}

export default App;
