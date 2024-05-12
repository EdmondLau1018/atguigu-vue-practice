<template>
  <div>
    <h2 style="color: #ac2925">我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
    </div>
    <!--保持对应的路由组件在路由切换的时候不被销毁-->
    <keep-alive :include="['News','Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
