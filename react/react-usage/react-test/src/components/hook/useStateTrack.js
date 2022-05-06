import React, { useState } from 'react';

function Child({ userInfo }) {
  //render: 初始化state
  //re-render: 只恢复初始化的state值，不会再重新设置新的值
  //           只能用setName修改;
  const [name, setName] = useState(userInfo.name);
  return (
    <div>
      <p>Childprops name: {userInfo.name}</p>
      <p>Child state name: {name}</p>
    </div>
  );
}

function Parent() {
  const [name, setName] = useState('hh');
  const userInfo = { name };
  return (
    <div>
      Parent
      <button
        onClick={() => {
          setName('lvh');
        }}
      >
        setName
      </button>
      <Child userInfo={userInfo} />
    </div>
  );
}

export default Parent;
