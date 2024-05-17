<script lang="ts" setup name="App">
//写JS 或者TS
import Person from './components/person.vue'
import {ref} from "vue";

let myH2 = ref()
let ren = ref()

function showH2(){
  console.log(myH2.value)
  console.log( ren.value)
}
</script>

<template>
  <h2 ref="myH2"> Tom</h2>
  <button @click="showH2">点我输出h2</button>
  <Person ref="ren"></Person>
</template>

<style>

.app {
  background-color: #fff;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>