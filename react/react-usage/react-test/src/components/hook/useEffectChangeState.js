import React, { useState, useRef, useEffect } from 'react';

function UseEffectChangeState() {
  const [count, setCount] = useState(0);
  //ComponentDidMount
  const countRef = useRef(0);
  useEffect(() => {
    console.log('useEffect...', count);

    //定时任务
    const timer = setInterval(() => {
      // console.log('setInterval...', count);
      console.log('setInterval...', countRef.current);

      // setCount(count + 1);
      setCount(++countRef.current);
    }, 1000);

    //清除定时任务
    return () => {
      clearInterval(timer);
    };
  }, []); //依赖是[]
  //依赖为[]时，re-render 不会重新执行effect函数
  //没有依赖: re-render 会重新执行effect函数

  return <div>count: {count}</div>;
}

export default UseEffectChangeState;
