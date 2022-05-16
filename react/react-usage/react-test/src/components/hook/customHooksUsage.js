import React from 'react';
import useAxios from './customHooks/useAxios';
// import useMousePosition from './customHooks/useMousePosition';

function CustomHooksUsage() {
  const url = 'http://localhost:3000/';
  const [loading, data, error] = useAxios(url);
  if (loading) {
    return <div>Loading...</div>;
  }
  return error ? (
    <div>{JSON.stringify(error)}</div>
  ) : (
    <div>{JSON.stringify(data)}</div>
  );
  // const [x, y] = useMousePosition();
  // return (
  //   <div style={{ height: 500, background: '#ccc' }}>
  //     <p>
  //       鼠标位置 {x} ,{y}
  //     </p>
  //   </div>
  // );
}

export default CustomHooksUsage;