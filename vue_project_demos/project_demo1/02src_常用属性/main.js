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

// 全局引入插件
import plugins from "@/plugins";
Vue.use(plugins)
new Vue({
    render: function (h) {
      return h(App)
    },
    // render: createElement => {
    //     //  render 函数 （在运行时充当模板解析器的功能） 解析 h1 本来的标签和 组件模板信息
    //     return createElement('h1','hello render')
    // },
    // render: createElement => createElement('h1','箭头函数版本')  //    箭头函数版本的 render
    //  将 Vue 实例对象挂载到对应的容器上 相当于 el 指定 Vue 服务的容器
}).$mount('#app')
