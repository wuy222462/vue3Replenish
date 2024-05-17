<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="myH2">北京</h2>
    <h3 ref="myH3">北京3</h3>
    <h3>中关村</h3>
    <button @click="showLog">点我输出h2 这个元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref} from "vue";

//创建一个变量 用于存储ref 标记的内容
let myH2 = ref()
let myH3 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog() {
  console.log(myH2.value);
  console.log(myH3.value);
}

//导出person 定义的数据
defineExpose({a,b,c})
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin-right: 10px;
}
</style>