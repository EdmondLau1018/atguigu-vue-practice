<template>
  <div>
    <button class="btn btn-danger" @click="getStudentsInfo">学生信息点击就送</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    getStudentsInfo(){
      axios.get('http://localhost:8080/studentsApi/students').then(
          response => {
            console.log('请求成功了，返回的结果为：',response.data);
          },
          error => {
            console.log('请求失败，原因是：',error.message);
          }
      )
    }
  },
  watch: {}
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

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
