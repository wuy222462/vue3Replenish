<template>
  <div class="person">
    ???
  </div>
</template>

<script setup lang="ts" name="Person">
import {type PersonInterface, type PersonList} from '@/types'
import {type Persons} from "@/types";
// let person:PersonInterface = {id: '0001', name: 'ZhangSan', age: 60}

//定义一个数组,并且数组里面每一项都符合PersonInterface 规范
let personList1 :Persons=[
  {id: '0001', name: 'ZhangSan', age: 60},
  {id: '0002', name: 'Lisi', age: 11},
  {id: '0003', name: 'WangWu', age: 23},
]
let personList2 :PersonList=[
  {id: '0001', name: 'ZhangSan', age: 60},
  {id: '0002', name: 'Lisi', age: 11},
  {id: '0003', name: 'WangWu', age: 23},
]
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