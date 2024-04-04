<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School id="school" ref="school"></School>
    <Student ref="student" whoreName="XXN"></Student>
    <h1 ref="h1">南京不欢迎你，臭外地的跑到南京来要饭来了？</h1>
  </div>
</template>

<script>
// 引入自定义组件
import School from "./components/School";
import Student from "./components/Student";


export default {
  name: 'App',
  components: {
    // 注册自定义组件
    School,
    Student
  },
  mounted() {
    // 获取的是 组件对象
    console.log(this.$refs.school);
    console.log(this.$refs.student);
    //  获取的是真实 DOM 元素
    console.log(this.$refs.h1.innerText);
    let element = document.getElementById('school');
    console.log(element);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
