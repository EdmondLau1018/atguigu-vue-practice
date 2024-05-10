import VueRouter from "vue-router";

//  引入相关组件
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";

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
                    path: 'message',
                    component: Message
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})
