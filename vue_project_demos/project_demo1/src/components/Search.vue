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
      //  用户点击搜索按钮修改 List 属性数据状态
      this.$bus.$emit('updateUserInfo',{isFirst: false,isLoading: true,errorMsg: '',userList: []})
      //  使用模板字符串（ES6） 语法拼接请求地址字符串
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            this.$bus.$emit('updateUserInfo',{isLoading:false,errorMsg: '',userList: response.data.items})
          },
          error =>{
            console.log('请求失败，原因是：',error.message);
            this.$bus.$emit('updateUserInfo',{isLoading:false,errorMsg: error.message,userList: []})
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
