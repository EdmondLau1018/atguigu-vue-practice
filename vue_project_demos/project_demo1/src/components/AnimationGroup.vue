<template>
  <div>
    <button class="btn btn-danger" @click="isShow = !isShow">进入/离开</button>
    <!--
    transition-group 标签控制 一组页面元素的显示和离开效果
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

/*使用过渡效果实现元素的进入和离开*/
/*进入效果的终点 || 离开的起点*/
.demo-enter-to, .demo-leave {
  transform: translateX(0px);
}

/*离开的起点 || 进入的终点*/
.demo-leave-to, .demo-enter {
  transform: translateX(-100%);
}
</style>
