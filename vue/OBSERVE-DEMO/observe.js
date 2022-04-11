function updateView() {
  console.log('视图更新');
}

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
  //重新定义各个属性
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

const data = {
  name: 'smartHui',
  age: 18,
};

data.name = 'Lvh';
data.age = 20;
observer(data);
