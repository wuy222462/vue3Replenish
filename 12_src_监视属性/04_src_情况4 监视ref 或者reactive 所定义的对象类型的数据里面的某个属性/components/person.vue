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
//如果监视person  那么person 里面任何一个地方发生变化都会被监视到
// watch(person,(newValue,oldValue)=>{
//   console.log('Person 变化了',newValue,oldValue)
// })

//情况4-1 如果想只监视person 的某一个属性, 那么需要写成一个getter 函数
// watch(()=>person.name,(newValue,oldValue)=>{
//   console.log('person 的名字变化了',newValue,oldValue)
// })

//情况4-2-1 : 直接写对象, 可以监视到对象里面属性的变化,但是直接把对象替换了,就监视不到了
// watch(person.car,()=>{
//   console.log('person .car 发生该改变了')
// })

//情况4-2-2: 这样 对象被替换了 可以被监视到 监视的是对象的地址值, 对象里面的属性改变是监视不到的
// watch(()=>person.car,()=>{
//   console.log('person.car 发生改变了')
// })

//情况4-2-3: 完美的解决方案, 写成函数式的监视, 但是 使用配置项做到  修改对象和修改对象内部的属性都能监视到
watch(()=>person.car,()=>{
  console.log('person.car 改变了')
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