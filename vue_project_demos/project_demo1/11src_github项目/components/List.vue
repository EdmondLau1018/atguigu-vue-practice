<template>
  <div class="row">
    <!--获取到结果之后展示在页面上 userList 长度决定是否显示-->
    <div class="card" v-show="info.userList.length" v-for="user in info.userList" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
<!--    展示欢迎页面-->
    <h1 v-show="info.isFirst">欢迎首次使用</h1>
    <!--展示请求正在加载的内容-->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errorMsg"> {{info.errorMsg}}</h1>
  </div>

</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: '',
        userList: []
      }
    }
  },
  mounted() {
    //  通过全局事件总线赋值
    this.$bus.$on('updateUserInfo', (infoDataObj) => {
      // console.log('检查 List 组件传值：',this.userList);
      //  通过字面量的方式获取值 相当于 infoDataObj 中 有的属性拷贝赋值给 this.info
      this.info = {...this.info, ...infoDataObj}
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}


</style>
