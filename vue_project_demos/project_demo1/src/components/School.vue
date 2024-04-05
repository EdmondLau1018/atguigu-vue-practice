<template>
  <div class="school">
    <h3>学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
    <h3>传递过来的 bitch name: {{whoreName}}</h3>
  </div>
</template>

<script>

export default {
  name: "School",
  data(){
   return {
     name: '牛牛学院',
     address: '北京昌平',
     whoreName: ''
   }
  },
  mounted() {
    //  给全局事件总线绑定事件
    this.$bus.$on('getWhoreName',(value) => {
      this.whoreName = value
    })
  },
  //  在当前组件销毁前 注意解绑给事件总线绑定的事件
  beforeDestroy() {
    this.$bus.$off('getWhoreName')
  }
}
</script>

<style scoped>
  .school {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: orange;
  }
</style>
