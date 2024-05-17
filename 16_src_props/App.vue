<script lang="ts" setup name="App">
import Person from './components/person.vue'
import type {Persons} from "@/types";
import {reactive} from "vue";

//这种方式写法更优雅
let personList = reactive<Persons>([
  {id: '0001', name: 'Tom', age: 12},
  {id: '0001', name: 'Jerry', age: 13},
  {id: '0001', name: 'David', age: 14, gender:'男'},
])
</script>

<template>
  <Person  :personList></Person>
</template>

<style>

.app {
  background-color: #fff;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>