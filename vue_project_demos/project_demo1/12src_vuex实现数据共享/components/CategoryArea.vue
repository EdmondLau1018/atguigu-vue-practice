<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <hr>
    <!--作用域插槽在传值的时候 如果是表达式（对象 / 数组） 则需要绑定 如果是 字符串则直接传值 -->
    <slot :games="games" message="测试传值"></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryArea",
  props: ['title'],
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
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
