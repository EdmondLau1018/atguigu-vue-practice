<template>
  <div class="school">
    <h3>学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
    <button @click="showName">火速展示</button>
  </div>
</template>

<script>
import {DemoMixin} from "@/DemoMixin";

export default {
  name: "School",
  mixins: [DemoMixin],
  data(){
   return {
     name: '牛牛学院',
     address: '北京昌平'
   }
  }
}
</script>

<style scoped>
  .school {
    background-color: orange;
  }
</style>
