<template>
<div>
  <h1>这是详情页面</h1>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Detail",
  // 路由组件通过 props 属性接收传递的参数
  props: ['id','title'],
  mounted() {
    console.log('detail 组件挂载完成这是路由信息：',this.$route);
  }
}
</script>

<style scoped>

</style>
