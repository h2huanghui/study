import { useState, useEffect } from 'react';
import axios from 'axios';

//封装 axios 发送网络请求的自定义 Hook(本质就是一个函数)
function useAxios(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    //利用 axios 发送网络请求
    setLoading(true);
    //发送一个 get 请求
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return [loading, data, error];
}

export default useAxios;
