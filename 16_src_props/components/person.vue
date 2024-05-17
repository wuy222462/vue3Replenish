<template>
  <div class="person">
    <ul>
      <li v-for="p in personList"  :key="p.id"> {{p.name}} ---{{p.age  }}-- {{p.id   }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
//接收a
// defineProps(['a'])

//接收加限制类型
// let  data=defineProps<{personList:Persons}>()


//接收 + 限制类型 + 限制必要性 + 指定默认值
import type {Persons} from "@/types";
withDefaults(defineProps<{personList?:Persons}>(),{personList:()=>[
    {name:'Tom',age:60,id:'0001'},
    {name:'Tom',age:60,id:'0001'},
    {name:'Tom',age:60,id:'0001'},
  ]})


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