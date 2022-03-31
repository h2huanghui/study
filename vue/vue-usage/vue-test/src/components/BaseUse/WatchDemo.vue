<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "合伙人",
      info: {
        city: "南京"
      }
    };
  },
  watch: {
    name(oldVal, val) {
      console.log("watch name", oldVal, val); //值类型，可以拿到oldVal
    },
    info: {
      handler(oldVal, val) {
        console.log("watch info", oldVal, val); //引用类型，拿不到oldVal（原因： 引用类型赋值，指向的地址是一个）
      },
      deep: true //深度监听
    }
  }
};
</script>
