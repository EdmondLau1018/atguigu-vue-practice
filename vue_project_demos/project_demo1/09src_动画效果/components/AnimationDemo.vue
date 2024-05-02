<template>
  <div>
    <button class="btn btn-danger" @click="isShow = !isShow">进入/离开</button>
    <!-- 未命名动画标签  用 v- 进行元素包裹-->
    <!--appear 绑定标签上的一个属性 （v-bind） 让页面开始的时候就有动画 也可以直接写 appear 因为是属性所以要用 v-bind 否则会被解析成一个字符串而不是表达式-->
    <transition :appear="true">
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

<style scoped>
h1 {
  background-color: orange;
}

/*进入和离开动画*/
.v-enter-active {
  animation: comeGoAnime 1s linear;
}

.v-leave-active {
  animation: comeGoAnime 1s linear reverse;
}

/*动画业务*/
@keyframes comeGoAnime {
  /*横向移动动画 从某个坐标向浏览器中移动*/
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
