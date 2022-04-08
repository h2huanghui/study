### 1. v-show 和 v-if 区别

v-show 是 DOM 都会加载出来,但样式是 display:none。适用于频繁切换，显示对应 DOM 的场景
v-if 只渲染符合条件的 DOM 元素。只是初始化渲染，基本不变动的情况

### 2. v-for 为何要用 key

### 3. Vue 组件生命周期

### 4. Vue 组件如何通讯

父组件

```
 <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
```

子组件

```
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
```

### 5. 组件渲染和更新的过程

### 6. 双向数据绑定 v-model 实现原理
