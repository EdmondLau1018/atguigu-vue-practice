<template>
  <div class="container">
    <category-area title="游戏">
      <!-- 插槽的使用者通过 scope 属性接收插槽传递的数据-->
      <template scope="data">
        <ul>
          <li v-for="(game,index) in data.games" :key="index">{{game}}</li>
        </ul>
        <h4>{{data.message}}</h4>
      </template>
    </category-area>
    <category-area title="游戏">
      <!-- 插槽的使用者通过 scope 属性接收插槽传递的数据-->
      <template slot-scope="data">
        {{data}}
      </template>
    </category-area>
  </div>
</template>

<script>
import Category from "@/components/Category";
import CategoryName from "@/components/CategoryName";
import CategoryArea from "@/components/CategoryArea";

export default {
  name: 'App',
  components: {CategoryArea, Category, CategoryName},
  data() {
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
