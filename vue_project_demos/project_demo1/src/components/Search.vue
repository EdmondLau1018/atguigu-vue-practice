<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" v-model="keyWord" placeholder="enter the name you search"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data(){
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers(){
      //  使用模板字符串（ES6） 语法拼接请求地址字符串
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            this.$bus.$emit('getUserList',response.data.items)
          },
          error =>{
            console.log('请求失败，原因是：',error.message);
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
