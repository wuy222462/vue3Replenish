<template>
  <div class="person">
    <h2>name:{{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>age: {{ nianling}}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {reactive, ref, toRef, toRefs} from 'vue'

//data
let person = reactive({
  name: 'Tom', age: 14,
})

//let {name,age}=person //从一个响应式对象结构出来的值不是响应式的

let{name,age} =toRefs(person) //toRefs 接收一个由reactive 定义的响应式对象, 并且将这个对象的每一组key-value 定义成一个响应式对象

let nianling=toRef(person,'age')

//methods
function changeName() {
  name.value += '!'
}

function changeAge() {
  age.value += 1
}
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