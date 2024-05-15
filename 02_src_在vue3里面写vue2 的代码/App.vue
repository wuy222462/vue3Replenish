<script lang="ts">
//写JS 或者TS
import Person from './components/person.vue'
export default {
  name:'App',
  components:{Person} //注册组件
}

</script>

<template>
<!--  写结构-->
  <div class="app">
    <h1> Hello Vue3</h1>
    <Person></Person>
  </div>
</template>

<style >

.app{
  background-color: #fff;
  box-shadow: 0 0 10px;
  border-radius:10px;
  padding:20px;
}
</style>