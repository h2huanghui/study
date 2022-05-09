class MyEventEmitter {
  constructor() {
    //eventMap 用来存储事件和监听函数之间的关系
    this.eventMap = {};
  }
  // type: 事件名称
  on(type, handler) {
    //handler必须是一个函数，如果不是直接报错
    if (!(handler instanceof Function)) {
      throw new Error('handler 必须传入一个函数');
    }
    //type事件对应的队列是否存在
    if (!this.eventMap[type]) {
      //如果不存在，新建该队列
      this.eventMap[type] = [];
    }
    //若存在，直接往队列里推入handler
    this.eventMap[type].push(handler);
  }
  //触发是可以携带数据的，params就是数据的载体
  emit(type, params) {
    if (this.eventMap[type]) {
      this.eventMap[type].forEach((handler) => {
        handler(params);
      });
    }
  }

  off(type, handler) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);
    }
  }
}
const myEvent = new MyEventEmitter();
const testHandler = function (params) {
  console.log(`test事件被触发了,testHandler接受到的入参是${params}`);
};
//监听test事件
myEvent.on('test', testHandler);
//触发test事件
myEvent.emit('test', 'newState');

export default myEvent;
