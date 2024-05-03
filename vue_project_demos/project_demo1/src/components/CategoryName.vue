<template>
  <div class="categoryName">
    <h3>{{ title }}分类</h3>
    <hr>
    <!--具名插槽 ： 一个组件内有多个插槽，通过 name 属性指定插槽的名称
    同样的 在调用方通过 slot 属性 或者 v-slot（仅适用于 <template> 标签）
    指定将特定的DOM 元素填充到指定名称的插槽中-->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryName",
  props: ['title']
}
</script>

<style scoped>
.categoryName {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>
