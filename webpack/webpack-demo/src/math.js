export const sum = (a, b) => {
  return a + b + 5 + 1;
};

export const multi = (a, b) => {
  return a * b;
};

//ES6 Module 才能让tree-shaking生效
//commonjs 就不行
