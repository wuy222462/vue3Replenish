<template>
  <div class="person">
    <h2>姓名: {{person.name}}</h2>
    <h2>年龄: {{person.age}}</h2>
    <h2>汽车: {{person.car.c1}},{{person.car.c2}}</h2>
    <button @click="changeName">change Name</button>
    <button @click="changeAge">change Age</button>
    <button @click="changeCar1">change FirstCar</button>
    <button @click="changeCar2">change SecondCar</button>
    <button @click="changeWholeCar">change WholeCar</button>
  </div>
</template>

<script setup lang="ts" name="Person">
//data
import {reactive, watch} from "vue";

let person =reactive({
  name:'Tom',age:12,
  car:{
    c1:'Benz',
    c2:'BaoMa'
  }
})

//methods
function changeName(){
  person.name='Jerry'
}
function changeAge(){
  person.age=99
}
function changeCar1(){
  person.car.c1='BigBenz'
}
function changeCar2(){
  person.car.c2='BigBaoMa'
}
function changeWholeCar(){
  person.car={c1:'Audi',c2:'DaZhong'};
}

//watch
//情况5: 监视多个属性.
watch([()=>person.name,()=>person.car],(newValue,oldValue)=>{
  console.log('name ,car1 has changed',newValue,oldValue)
},{deep:true})

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