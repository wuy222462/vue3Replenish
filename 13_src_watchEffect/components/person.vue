<template>
  <div class="person">
    <h2>需求:当水温达到60度 或者水位达到80cm 的时候 给服务器发请求 </h2>
    <h2>当前水温为: {{ temp }} ℃</h2>
    <h2>当前水位为: {{ height }} ㎝</h2>
    <button @click="changeTemp">changeTemp</button>
    <button @click="changeHeight">changeHeight</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, watch, watchEffect} from "vue";

//data
let temp = ref(10)
let height = ref(0)

//methods
function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

//watch 实现
// watch([temp, height], (newValue) => {
//   //获取最新的水温,水位
//   let [newTemp, newHeight] = newValue
//   if ( newTemp >= 60 || newHeight >= 80 )
//     console.log('给服务器发请求')
// })

//watchEffect
watchEffect(()=>{
   if (temp.value>=60||height.value>=80){
     console.log('给服务器发请求')
   }
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