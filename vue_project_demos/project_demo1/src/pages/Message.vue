<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 通过 params 方式传参 对应的 router-link 属性中只能使用 name 属性对对应的路由进行标记 -->
        <router-link :to="{
          name: 'detail',
          query: {
            id: m.id,
            title: m.title
          }
        }">{{ m.title }}
        </router-link>
        <button @click="pushCheck(m)">push 模式预览</button>
        <button @click="replaceCheck(m)">replace 模式预览</button>
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
  },
  methods: {
    //  push 和 replace 是 $router 上的两个原型方法
    //  可以 以 push 和 replace的方式控制浏览器跳转
    pushCheck(m){
      this.$router.push({
        name: 'detail',
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceCheck(m){
      this.$router.replace({
        name: 'detail',
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
  //  路由组件生命周期钩子函数
  activated() {
    console.log('当前路由组件 Message 被激活了');
  },
  deactivated() {
    console.log('当前路由组件 Message 失活了');
  }
}
</script>

<style scoped>

</style>
