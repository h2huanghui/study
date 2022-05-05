import React, { useState } from 'react';

function ClickCounter() {
  //数组解构
  const [count, setCount] = useState(0);

  //const arr = useState(0);
  //const count = arr[0];
  //const setCount = arr[1];

  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ClickCounter;
