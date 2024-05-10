<template>
  <div>
    <div class="row">
     <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
           <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
export default {
  name:'App',
  components: {Banner},
  data() {
  },
  computed:{
  },
  methods: {
  },
}
</script>

<style lang="css">
button{
  margin-left: 5px;
}
</style>

<!--
路由组件通常放在 pages 目录下
一般组件通常放在 components 目录下
通过切换 被切换走的组件会被销毁 ，有需要的组件才会被挂载
每个路由组件都有自己的 route 信息  可以通过 $route 看到
整个应用只有一个 router 可以通过 $router 看到
-->
