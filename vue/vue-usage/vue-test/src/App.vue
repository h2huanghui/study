<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    <router-view /> -->
    <!-- <TplDemo />
    <ComputedDemo />
    <WatchDemo />
    <ClassDemo /> -->
    <!-- <ConditionDemo /> -->
    <!-- <ListDemo /> -->
    <EventDemo />
    <!-- <FormDemo /> -->
  </div>
</template>

<script>
// import TplDemo from "./components/BaseUse/TplDemo";
// import ComputedDemo from "./components/BaseUse/ComputedDemo";
// import WatchDemo from "./components/BaseUse/WatchDemo";
// import ClassDemo from "./components/BaseUse/ClassDemo";
// import ConditionDemo from "./components/BaseUse/ConditionDemo";
// import ListDemo from "./components/BaseUse/ListDemo";
import EventDemo from "./components/BaseUse/EventDemo";
// import FormDemo from "./components/BaseUse/FormDemo";

export default {
  name: "App",
  components: {
    // TplDemo, //组件注册
    // ComputedDemo,
    // WatchDemo,
    // ClassDemo
    // ConditionDemo
    // ListDemo
    EventDemo
    // FormDemo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
