/**
 *该文件是 Vue-CLI 项目的入口文件
 * 程序执行 npm run serve 的时候就会走这个文件
 */
//  引入 Vue
import Vue from 'vue'
//  引入管理其他组件的组件 App
import App from './App.vue'
import VueRouter from "vue-router";
//  从自定义 index 文件中引入暴露的 router 对象
import router from './router'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueRouter)
//  创建 Vue 实例对象
new Vue({
    //  安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    render: function (h) {
      return h(App)
    },
    router:router
}).$mount('#app')
