<script lang="ts">
  export default {
    name: "Person",

    setup(){
      //数据
      let name = 'Tom'
      let age = 15
      let tel = '1231412412'

      //方法
      function changeName(){
        name='Jerry' //注意:这样修改name 页面是没有变化的 name 确实改了 但是页面不会变化
      }
      function changeAge(){
        age+=1        //注意:这样修改gay  页面是没有变化的 age 确实改了 但是页面不会变化
      }
      function showTel(){
        alert(tel)
      }

      //返回值
      return{ name,age ,tel,changeName,changeAge,showTel }
    },
    data(){
      return {a:100,c:this.name}
    },

    methods:{
      b(){
        console.log('b')
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

    <hr>
    <h1>vue2 的写法可以用this 并且可以读取vue3 的写法里面的东西的 反之不行</h1>
    <h2>测试1:{{a}}</h2>
    <h2>测试2:{{c}}</h2>
    <button @click="b">点我</button>
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