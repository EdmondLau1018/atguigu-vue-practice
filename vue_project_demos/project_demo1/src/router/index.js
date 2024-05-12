import VueRouter from "vue-router";

//  引入相关组件
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "@/pages/Detail";

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component:Detail,
                            //  使用 props 为 true 的配置 可以让路由组件接收到 params 类型的数据 无法接收 query 类型的数据
                            // props: true
                            //  完整用法 props 属性写成一个函数 参数是路由对象 返回值是向路由组件传递的值
                            //  通过这个对象可以从 query 或者 params 属性中获取值
                            props($route){
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})
