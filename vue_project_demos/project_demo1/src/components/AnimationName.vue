<template>
  <div>
    <button class="btn btn-danger" @click="isShow = !isShow">进入/离开</button>
    <!-- 未命名动画标签  用 v- 进行元素包裹-->
    <!--appear 绑定标签上的一个属性 （v-bind） 让页面开始的时候就有动画 也可以直接写 appear 因为是属性所以要用 v-bind 否则会被解析成一个字符串而不是表达式-->
    <transition name="demo" :appear="true">
      <h1 v-show="isShow">动画效果演示</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AnimationDemo",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<!-- 给 transition 标签 绑定 name 元素 可以实现不同的页面元素有不同的动画效果
在 CSS 写动画的时候 把  v- 替换成 名称- 就可以了
-->
<style scoped>
h1 {
  background-color: orange;
  transition: 1s linear;
}
/*使用过渡效果实现元素的进入和离开*/
/*进入效果的终点 || 离开的起点*/
.demo-enter-to,.demo-leave {
  transform: translateX(0px);
}
/*离开的起点 || 进入的终点*/
.demo-leave-to,.demo-enter {
  transform: translateX(-100%);
}
</style>
