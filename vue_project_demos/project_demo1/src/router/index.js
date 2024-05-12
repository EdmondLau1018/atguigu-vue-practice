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
                            path: 'detail/:id/:title',
                            component:Detail
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
