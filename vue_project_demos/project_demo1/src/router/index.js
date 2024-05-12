import VueRouter from "vue-router";

//  引入相关组件
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "@/pages/Detail";

const router =  new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {isAuth:false,title: '关于'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {isAuth: false,title: '主页'},
            children: [
                {
                    name: 'message',
                    // children 路由不需要
                    path: 'message',
                    component: Message,
                    meta: {isAuth:true,title: '主页'},
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
                            },
                            meta: {isAuth:true,title: '详情页面'},
                        }
                    ]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: {isAuth:true,title: '新闻'},
                }
            ]
        }
    ]
})

//  全局前置路由守卫
router.beforeEach((to,from,next) => {
    console.log('前置路由守卫：',to,from);
    if (to.meta.isAuth) {
        //  判断权限的业务逻辑
        if (localStorage.getItem('school') === 'edmond') {
            next()
        } else {
            alert('名称不正确，当前用户不存在这个权限')
        }
    }else {
        next()
    }
})

//  全局后置路由守卫
router.afterEach((to,from) => {
    //  更换网页标题
    document.title = to.meta.title
})

//  将路由规则对外暴露
export default router
