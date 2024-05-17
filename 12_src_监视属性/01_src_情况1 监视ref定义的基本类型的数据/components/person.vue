<template>
  <div class="person">
    <h1>情况1 监视ref 定义的 基本类型的数据</h1>
    <h2>当前求和为: {{sum}}</h2>
    <button @click="changeSum"> change Sum</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {computed, ref, watch} from "vue";

//data
let sum =ref(0)


//methods
function changeSum() {
  sum.value += 1
}

//watch
//watch 是由返回值的 返回值是一个函数.
//watch 方法的第一个参数 是监视对象,第二个参数是回调
const stopWatchSum= watch(sum,(newValue,oldValue)=>{
  console.log('sum changed',newValue,oldValue)
  if (sum.value>=10) stopWatchSum()
})
</script>

<style>
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