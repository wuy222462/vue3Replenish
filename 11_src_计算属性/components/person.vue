<template>
  <div class="person">
    姓氏: <input type="text" v-model="firstName"> <br>
    名字: <input type="text" v-model="lastName"> <br>
    <!-- 计算属性和方法的缓存对比 计算属性会执行一次 和数据改变会执行    -->
    全名: <span>{{ fullName }} </span> <br>
    全名: <span>{{ fullName }} </span> <br>
    <!--  方法调一次执行一次   -->
    全名: <span>{{ getFullName() }} </span> <br>
    全名: <span>{{ getFullName() }} </span> <br>
    全名: <span>{{ getFullName() }} </span> <br>
    全名: <span>{{ getFullName() }} </span> <br>

    <button @click="changeFullName">change fullName to lisi</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {computed, ref} from "vue";

//data
let firstName = ref('张')
let lastName =  ref('三')

//这样定义的fullName 是只读的
// let fullName=computed(()=>{
//   // console.log('计算属性有缓存')
//   return   firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-' +lastName.value
// })

//这样定义的计算属性是可读可写的
let fullName=computed({
  get(){
    return   firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-' +lastName.value
  },
  set(value){
    const [str1,str2]=value.split('-')
    firstName.value=str1
    lastName.value=str2
  }
})
//methods
function getFullName(){
  // console.log('方法没有缓存')
  return   firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-' +lastName.value
}
function changeFullName(){
   fullName.value='li-si'
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