<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <hr>
    <!--默认插槽 ： 没有名称 将 组件代码段中的代码片段 放在这个位置相当于是挖了一个坑-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title']
}
</script>

<style scoped>
.category {
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
