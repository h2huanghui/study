function updateView() {
  console.log('视图更新');
}

//重新定义数组原型
const oldArrayProperty = Array.prototype;

//创建新对象，原型指向 oldArrayProperty,再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);

//代码优化
['push', 'pop', 'slice', 'shift', 'unshift'].forEach((methodName) => {
  arrProto[methodName] = function () {
    updateView(); //更新视图
    oldArrayProperty[methodName].call(this, ...arguments); //调用数组原型的push方法
  };
});

function defineReactive(target, key, value) {
  //深度监听
  observer(value);
  //核心API
  Object.defineProperty(target, key, {
    get() {
      console.log('get Value==', value);
      return value;
    },
    set(newVal) {
      console.log('newVal===', newVal);
      //深度监听
      observer(value);
      value = newVal;
      if (newVal !== value) {
        updateView();
      }
    },
  });
}

function observer(target) {
  if (typeof target !== 'object' || target === null) {
    //不是对象或数组
    return target;
  }
  if (Array.isArray(target)) {
    target.__proto__ = arrProto;
  }
  //重新定义各个属性
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

const data = {
  name: 'smartHui',
  age: 18,
  info: {
    address: ''
  },
  numbers: [10, 20, 30],
};

data.name = 'Lvh';
data.age = 20;
numbers.push(40);
observer(data);
