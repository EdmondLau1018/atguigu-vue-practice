<template>
<div>
  <h1>这是详情页面</h1>
  <ul>
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log('detail 组件挂载完成这是路由信息：',this.$route);
  }
}
</script>

<style scoped>

</style>
