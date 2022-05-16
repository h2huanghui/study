const obj1 = {
  name: 'gg',
  address: {
    info: 'nanjing',
  },
  arr: ['a', 'b', 'c'],
};
const obj2 = deepClone(obj1);
obj2.address = 'shanghai';
obj2.arr[0] = 'a1';
console.log(obj1.address.info);
console.log(obj1.arr[0]);
/**
 * 深拷贝
 *@param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    //保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      //递归调用!!!
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
