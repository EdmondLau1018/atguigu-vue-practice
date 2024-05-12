<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 通过 params 方式传参 对应的 router-link 属性中只能使用 name 属性对对应的路由进行标记 -->
        <router-link :to="{
          name: 'detail',
          params: {
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
