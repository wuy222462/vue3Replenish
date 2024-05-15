<script lang="ts">
  export default {
    name: "Person",
    data(){
      return{
        name:'Tom',
        age:14,
        tel:'1233333333'
      }
    },
    methods:{
      showTel(){
        alert(this.tel)
      },
      changeName(){
        this.name="Tom&Jerry"
      },
      changeAge(){
        this.age+=1
      }
    }
  }
</script>

<template>
  <div class="person">
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <h2>电话: {{tel}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<style scoped>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius:10px;
    padding:20px;
  }
  button{
    margin-right: 10px;
  }
</style>