import React, { useState, useEffect } from 'react';

function LifeCycles() {
  //数组解构
  const [count, setCount] = useState(0);
  //模拟 class组件的ComponentDidMount 和ComponentDidUpdate
  useEffect(() => {
    console.log(`在此发送一个ajax请求${count}`);
    //下次effect执行之前，被执行
    return () => {
      console.log(`结束监听 ${count}`);
    };
  });

  // //模拟class组件的componentDidMount
  // useEffect(() => {
  //   console.log('加载完了');
  // }, []); //第二个参数是[](不依赖于任何state)

  // //模拟class组件的DidUpdate
  // useEffect(() => {
  //   console.log('更新了');
  // }, [count]); //第二个参数就是依赖的state

  // 模拟class组件的componentDidMount
  // useEffect(() => {
  //   let timerId = window.setInterval(() => {
  //     console.log(Date.now());
  //   }, 1000);
  //   //返回一个函数
  //   //模拟class组件的componentWillUnmount,[特别注意]并不完全等同于componentWillUnmount
  //   return () => {
  //     window.clearInterval(timerId);
  //   };
  // }, []);

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

export default LifeCycles;
