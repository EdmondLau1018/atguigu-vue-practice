<template>
  <div class="student">
    <h3>学生名称：{{ name }}</h3>
    <h3>学生性别：{{ sexJob }}</h3>
    <h3>展示 whoreName : {{whoreName}}</h3>
    <button @click="showName">火速展示</button>
  </div>
</template>

<script>
import {DemoMixin} from "../DemoMixin";
export default {
  name: "Student",
  mixins: [DemoMixin],
  props: {
    whoreName: {
      type: String,
      default: 'DMH',
      required: true,
    }
  },
  data() {
    return {
      name: '小牛马',
      sexJob: '网红女技师'
    }
  }
}
</script>

<style scoped>
.school {
  background-color: yellow;
}
</style>
