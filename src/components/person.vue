
<script setup lang="ts" name="Person">
  import {reactive} from "vue";

  //数据
  let car=reactive({
    brand:'Benz',
    price:100
  })
  let games=reactive([
    {id:'0001', name:'CS'},
    {id:'0002', name:'LOL'},
  ])

  //reactive 所定义的对象的层级式深层次的.
  let obj =reactive({
    a:{
      b:{
        c:{
          d:333
        }
      }
    }
  })

  //源对象经过reactive 包裹就会变成一个响应式对象.


  console.log(car)  // 这里是 一个Proxy 对象

  function  changePrice(){
    car.price+=1
  }
  function changeFirstGameName(){
    games[0]={id:'0001', name:'流星蝴蝶剑'}
  }
  function changeObj(){
    obj.a.b.c.d=999
  }

</script>

<template>
  <div class="person">
    <h2>一辆{{car.brand}}车 ,价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="g in games" :key="g.id ">{{g.name}}</li>
    </ul>
    <button @click="changeFirstGameName">change firstGame's name</button>

    <hr>
    <h2>测试: {{obj.a.b.c.d}}</h2>
    <button @click="changeObj">changeObj</button>
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