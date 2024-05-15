<script lang="ts">
  export default {
    name: "Person",

    //vue2 的api 是options 风格的
    //  这种设计会把多个功能的数据和方法都混合堆叠在一个配置项中
    //vue3 的api 是composition 风格的
    //  这种设计一个功能对应一个composition 组件. 一个功能相关的 数据方法 都放在一个方法中 比较集中 方便管理


    //选项式
    // data(){
    //   return{
    //     name:'Tom',
    //     age:14,
    //     tel:'1233333333'
    //   }
    // },
    // methods:{
    //   showTel(){
    //     alert(this.tel)
    //   },
    //   changeName(){
    //     this.name="Tom&Jerry"
    //   },
    //   changeAge(){
    //     this.age+=1
    //   }
    // },


    //配置式
    setup(){
      //setup里面没有this
      //setup 的执行时机早于beforeCreate
      console.log(this) //undefined(setup函数中的this 是undefined Vue3 中已经弱化this了)
      console.log('setup')
      //data 这些数据都不是响应式的.
      let name = 'Tom'
      let age = 15
      let tel = '1231412412'

      function changeName(){
        name='Jerry' //注意:这样修改name 页面是没有变化的 name 确实改了 但是页面不会变化
      }
      function changeAge(){
        age+=1        //注意:这样修改gay  页面是没有变化的 age 确实改了 但是页面不会变化
      }
      function showTel(){
        alert(tel)
      }
      return{ name,age ,tel,changeName,changeAge,showTel }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },


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