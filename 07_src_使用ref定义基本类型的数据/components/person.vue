
<script setup lang="ts" name="Person">
import {ref} from 'vue'
let name = ref('Tom')
let age = ref(15)
let tel = '1231412412'
let address = '北京'


console.log('name', name)  //变成了RefImpl 的实例对象
console.log('age',age)     //变成了RefImpl 的实例对象
console.log('tel', tel)     //依旧是字符串
console.log('address', address) //依旧是字符串
//方法
function changeName() {
  name.value = 'Jerry'
}
function changeAge() {
  age.value += 1
}
function showTel() {
  alert(tel)
}
</script>

<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>电话: {{ tel }}</h2>
    <h2>地址: {{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

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