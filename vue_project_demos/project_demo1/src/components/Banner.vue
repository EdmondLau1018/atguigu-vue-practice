<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back(){
      //  从 $router 对象获取原型方法 控制浏览器记录的前进或者后退
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  }
}
</script>

<style scoped>

</style>
