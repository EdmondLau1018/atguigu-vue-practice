<template>
  <div>
    <button class="btn btn-danger" @click="isShow = !isShow">进入/离开</button>
    <!--
    transition-group 标签控制 一组页面元素的显示和离开效果
    transition 相关 标签只是 相当于在元素进入和离开的时候 Vue 给元素新增一个 动画 class
    -->
    <transition-group name="animate__animated animate__bounce"
                      appear
                      enter-active-class="animate__bounceIn"
                      leave-active-class="animate__bounceOutUp"
    >
      <h1 v-show="isShow" key="demo1">动画效果演示</h1>
      <h1 v-show="!isShow" key="demo2">动画效果反过来演示</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "AnimationDemo",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
  transition: 1s linear;
}
</style>
