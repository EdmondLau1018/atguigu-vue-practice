<template>
  <div class="school">
    <h3>学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
    <button @click="sendSchoolName">点击传递学校名称</button>
  </div>
</template>

<script>

import pubsub from "pubsub-js";

export default {
  name: "School",
  data(){
   return {
     name: '牛牛学院',
     address: '北京昌平'
   }
  },
  mounted() {
    this.pubId = pubsub.subscribe('getWhoreName',(mesName, data) => {
      console.log(mesName, 'data:',data);
      alert('婊子的名称为：'+ data)
    });
  },
  //  解绑订阅消息
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
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
