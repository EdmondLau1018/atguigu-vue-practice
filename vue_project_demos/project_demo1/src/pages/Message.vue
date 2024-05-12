<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- query 方式传参通过的是 路径 url 传参 -->
        <router-link :to="{
          path: '/home/message/detail',
          query: {
            id: m.id,
            title: m.title
          }
        }">{{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: '001',
          title: '消息001'
        },
        {
          id: '002',
          title: '消息002'
        },
        {
          id: '003',
          title: '消息003'
        },
        {
          id: '004',
          title: '消息004'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
