<template>
  <div class="student">
    <h3>学生名称：{{ name }}</h3>
    <h3>学生性别：{{ sexJob }}</h3>
    <button @click="sendWhoreInfo">发送婊子信息</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    whoreName: {
      type: String,
      default: 'DMH',
      required: true,
    }
  },
  data() {
    return {
      name: '小杜||杜小涵',
      sexJob: '网红女技师'
    }
  },
  methods: {
    sendWhoreInfo(){
      this.$bus.$emit('getWhoreName',this.name)
    }
  }
}
</script>

<style scoped>
.student {
  background-color: yellowgreen;
  margin-top: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
