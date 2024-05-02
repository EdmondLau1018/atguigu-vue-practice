<template>
  <div class="container">
    <category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </category>
    <category title="游戏">
      <ul>
        <li v-for="(game,index) in games" :key="index">{{ game }}</li>
      </ul>
    </category>
    <category title="电影">
      <!-- controls 标签控制视频播放-->
      <video
          controls
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: 'App',
  components: {Category},
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
