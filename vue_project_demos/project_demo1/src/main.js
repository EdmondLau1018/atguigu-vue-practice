/**
 *该文件是 Vue-CLI 项目的入口文件
 * 程序执行 npm run serve 的时候就会走这个文件
 */
//  引入 Vue
import Vue from 'vue'
//  引入管理其他组件的组件 App
import App from './App.vue'
//  关闭 Vue 生产提示
Vue.config.productionTip = false
//  创建 Vue 实例对象
new Vue({
  render: function (h) { return h(App) },
  //  将 Vue 实例对象挂载到对应的容器上 相当于 el 指定 Vue 服务的容器
}).$mount('#app')
