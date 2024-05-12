<template>
  <div>
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
    <!--相当于绑定透明度属性-->
    <h2 :style="{opacity}"><b>测试 vue 路由组件生命周期函数</b></h2>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1
    }
  },
  //  路由组件生命周期钩子函数
  activated() {
    console.log('当前路由组件 News 被激活了');
    //  当前组件被激活的时候开启定时器
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('当前路由组件 News 失活了');
    //  当前组件失活的时候注销定时器
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
