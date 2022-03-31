<template>
  <div>
    <p>输入框： {{ name }}</p>
    <input text="text" v-model.trim="name" />
    <input text="text" v-model.lazy="name" />
    <input text="text" v-model.number="age" />

    <p>多行文本： {{ desc }}</p>
    <textarea v-model="desc"></textarea>

    <p>复选框： {{ checked }}</p>
    <input type="checkbox" v-model="checked" />

    <p>多个复选框： {{ checkedNames }}</p>
    <input type="checkbox" id="hh" value="Hh" v-model="checkedNames" />
    <label for="hh">Hh</label>
    <input type="checkbox" id="lvh" value="LvH" v-model="checkedNames" />
    <label for="lvh">LvH</label>
    <input type="checkbox" id="lvy" value="LvY" v-model="checkedNames" />
    <label for="lvy">LvY</label>

    <p>单选 {{ gender }}</p>
    <input type="radio" id="male" value="Male" v-model="checkedNames" />
    <label for="male">男</label>
    <input type="radio" id="female" value="Female" v-model="checkedNames" />
    <label for="female">女</label>

    <p>下拉列表选择 {{ selected }}</p>
    <select v-model="selected">
      <option value="">请选择</option>
      <option value="a">A</option>
      <option value="b">B/option> </option>
    </select>

    <p>下拉列表选择(多选) {{ selectedList }}</p>
    <select v-model="selectedList" mutiple>
      <option value="">请选择</option>
      <option value="a">A</option>
      <option value="b">B/option> </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "合伙人",
      age: 18,
      desc: "自我介绍",

      checked: true,
      checkedNames: [],

      gender: "male",

      selected: "",
      selectedList: []
    };
  }
};
</script>
