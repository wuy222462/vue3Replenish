<!--<script lang="ts">-->
<!--//专门配置组件名字的script 标签-->
<!--export default {-->
<!--  name: "Person",-->
<!--}-->
<!--</script>-->


<!--如果想要只写一个script 标签
    那么需要先安装插件 npm i vite-plugin-vue-setup-extend -D
    然后在vite.config.ts里面引入扩展 使用插件
    import VueSetupExtend from 'vite-plugin-vue-setup-extend'
    VueSetupExtend(),

    或者
    组件名字和文件名字一样就可以省略这个步骤
-->
<!---->

<script setup lang="ts" name="Person12">
//专门配置组合式标签api 的script 标签

let name = 'Tom'
let age = 15
let tel = '1231412412'
let address = '北京'

//方法
function changeName() {
  name = 'Jerry' //注意:这样修改name 页面是没有变化的 name 确实改了 但是页面不会变化
}
function changeAge() {
  age += 1        //注意:这样修改gay  页面是没有变化的 age 确实改了 但是页面不会变化
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