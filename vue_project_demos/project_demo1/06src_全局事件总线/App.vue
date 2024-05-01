<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School id="school" ref="school"></School>
    <Student ref="student"/>
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
    School,
    Student
  },
  mounted() {
  },
  methods: {
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
  background-color: gray;
}
</style>
