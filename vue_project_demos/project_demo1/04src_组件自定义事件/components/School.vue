<template>
  <div class="school">
    <h3>学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
    <button @click="sendSchoolName">点击传递学校名称</button>
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
  },
  methods: {
    sendSchoolName(){
      this.$emit('getName',this.name,111,222,555,5666)
    }
  }
}
</script>

<style scoped>
  .school {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: orange;
  }
</style>
