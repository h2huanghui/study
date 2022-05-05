import React, { useRef, useEffect } from 'react';

function UseRef() {
  const btnRef = useRef(null); //初始值
  useEffect(() => {
    console.log(btnRef.current); //DOM 节点
  }, []);
  return (
    <div>
      <button ref={btnRef}>click</button>
    </div>
  );
}

export default UseRef;
