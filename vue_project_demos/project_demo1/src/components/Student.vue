<template>
  <div class="school">
    <h3>学生名称：{{ name }}</h3>
    <h3>学生性别：{{ sexJob }}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
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
