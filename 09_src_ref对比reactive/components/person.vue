<!--
1. ref 和reactive
reactive 只能定义对象类型的响应式数据
ref 可以定义基本类型和对象类型的响应式数据

2. ref 定义对象类型的数据
使用的时候需要.value 取出值.
表面上是使用ref 定义了一个响应式对象,但是底层是使用reactive

3.reactive 重新分配一个对象的时候会失去响应式

4.ref 和reactive 使用上的区别
  ref 创建的变量必须使用.value
  reactive 重新分配一个对象 会失去响应式(可以使用Object.assign 去整体替换
5.使用原则
  如果需要一个基本类型的响应式数据,必须使用ref
  如果需要一个响应式对象,层级不慎, ref ,reactive 都可以
  如果需要一个响应式对象,层级较深, 使用reactive
-->
<script setup lang="ts" name="Person">
import {reactive, ref} from "vue";
//数据
let car = reactive({
  brand: 'Benz',
  price: 100
})
let sum = ref(0)

// let name=reactive('Tom')  这是错误的 因为reactive 只能定义对象类型的数据.
function changePrice() {
  car.price += 1
}

function changeBrand() {
  car.brand = 'BYD'
}
function changeCar() {
  //car={brand:'Benz',price:200} //这样写是错误的,  因为把一个RefImpl 对象变成了一个普通对象 所以失去了响应式
  // car=reactive({brand:'Benz',price:200}) //这样写也是错误的 页面也是不更新的,因为是两个响应式对象

  //使用这个写法 页面可以更新的.
  Object.assign(car,{brand:'BaoMa',price:222})
}

function changeSum() {
  sum.value++
}

</script>

<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车 ,价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为{{ sum }}</h2>
    <button @click="changeSum">点我sum加1</button>
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