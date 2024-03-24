<template>
  <div class="school">
    <h3>学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
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
