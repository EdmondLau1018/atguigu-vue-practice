<template>
  <div class="container">
    <category-name>
      <ul slot="center">
        <li v-for="(food,index) in foods" :key="index">{{ food }}</li>
      </ul>
      <img slot="footer" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </category-name>
    <category-name>
      <!--使用 template 包裹元素可以省去一层 div
      而且使用 template 可以使用插槽新的写法 v-slot:插槽名称-->
      <template v-slot:center>
        <ul>
          <li v-for="(film,index) in films" :key="index">{{ film }}</li>
        </ul>
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
      </template>
      <h4 slot="footer" style="text-align: center">欢迎观影</h4>
    </category-name>
  </div>
</template>

<script>
import Category from "@/components/Category";
import CategoryName from "@/components/CategoryName";

export default {
  name: 'App',
  components: {Category, CategoryName},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  },
  mounted() {
  },
  methods: {},
  watch: {}
}
</script>

<style>
/*调整页面布局*/
.container {
  display: flex;
  justify-content: space-around;
}
</style>
