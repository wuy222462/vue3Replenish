<template>
  <div class="person">
    <h1>情况1 监视ref 定义的 对象类型的数据</h1>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="changeAge">修改名字</button>
    <button @click="changeName">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {computed, ref, watch} from "vue";
//data
let person =ref( {name: 'Tom', age: 12})
//methods
function changeName(){
  person.value.name+='~'
}
function changeAge(){
  person.value.age+=1
}
function changePerson(){
  person.value={name: 'Jerry', age: 12}
}

//watch
//情况1 :监视ref 定义的对象类型的数据, 监视的是对象的地址值 如果想监视对象内部属性的变化, 需要手动开启深度监视 ,需要添加第三个配置项目
//配置项目: immediate:true 上来就调用一下,  deep :true  开启深度监视, 对象里面的属性变了也监视
//这里如果改变person 的属性 那么newValue 和oldValue 会是一样的,因为对象的地址没有变, 取出来的是一样的,
//如果改变的整个person 那么newValue 和oldValue 是不一样的, 因为对象的地址改变了.

//watch 的三个参数: 被监视的数据, 监视的回调 , 配置对象(deep ,immediate....)
watch(person,(newValue,oldValue)=>{
  console.log('person变化了',newValue,oldValue)
},{deep:true/*,immediate:true*/})

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