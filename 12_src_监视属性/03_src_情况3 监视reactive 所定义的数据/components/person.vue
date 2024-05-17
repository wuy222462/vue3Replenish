<template>
  <div class="person">
    <h1>情况3 监视reactive 定义的 对象类型的数据</h1>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="changeAge">修改名字</button>
    <button @click="changeName">修改年龄</button>
    <button @click="changePerson">修改整个人</button>

    <hr>
    <h2>测试:{{obj.a.b.c}}</h2>
    <button @click="testDemo">点我修改</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {reactive, toRefs, watch} from "vue";
//data
let person =reactive( {name: 'Tom', age: 12})
let obj=reactive({a:{b:{c:533}}})
//methods
function changeName(){
  person.name+='~'
}
function changeAge(){
  person.age+=1
}
function changePerson(){
  //使用reactive 定义的响应式数据 如果 需要整个替换的话 需要使用object.assign  方法
  Object.assign(person,{name: 'Jerry', age: 12}) //此处没有新对象,属性名字相同 值覆盖掉原来的值
}

function testDemo(){
  obj.a.b.c=999
}
//watch
//当我们监视reactive 定义的对象的时候 ,默认是开启了深度监视 改变对象和改变对象的属性都会监视到
//隐式的创建了深层监听 且这个深度监视是不可以关掉的.
//且这个时候 newValue 和oldValue 是一样的 ,因为没有新的对象产生 都是原来的对象更改属性.
watch(person,(newValue,oldValue)=>{
  console.log('person change' ,newValue,oldValue)
}, )

watch(obj,(newValue,oldValue)=>{
  console.log('obj变化了',newValue,oldValue)
})

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