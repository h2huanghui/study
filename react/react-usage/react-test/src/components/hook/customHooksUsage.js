import React from 'react';
import useAxios from './customHooks/useAxios';

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
}

export default CustomHooksUsage;
