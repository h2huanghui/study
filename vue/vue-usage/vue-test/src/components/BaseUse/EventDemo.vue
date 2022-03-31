<template>
  <div>
    <p>{{ num }}</p>
    <button @click="clickHandler1">
      1. 不需要传入额外的自定义参数的情况 +1
    </button>
    <button @click="clickHandler2(2, $event)">
      2. 需要传入额外的自定义参数,手动传入$event +2
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    //1. 不需要传入额外的自定义参数的情况
    clickHandler1(event) {
      console.log("event", event, event.__proto__.constructor); //1.原生event对象
      console.log(event.target);
      console.log(event.currentTarget); //2.事件被挂载到当前元素
      this.num++;
    },
    //2. 需要传入额外的自定义参数,手动传入$event
    clickHandler2(val, event) {
      console.log("msg", val);
      console.log("event", event);
      console.log(event.target);
      this.num = this.num + val;
    }
  }
};
</script>
