import { useState, useEffect } from 'react';

function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    function mouseoverHandler(event) {
      setX(event.clientX);
      setY(event.clientY);
    }
    // 绑定事件
    document.body.addEventListener('mouseover', mouseoverHandler);

    // 解绑事件
    return () => {
      document.body.removeEventListener('mouseover', mouseoverHandler);
    };
  }, []);

  return [x, y];
}

export default useMousePosition;
