//  引入 Vue
import Vue from 'vue'

//  引入插件 VueX
import Vuex from 'vuex'

//  使用插件
Vue.use(Vuex)
//  通过 store 中的 namespace 将
const countAbout = {
    namespaced: true,
    actions: {
        add(context, value) {
            console.log('actions接收上下文参数 context：', context, '接收到传递的参数', value);
            //  通过 commit 调用 mutations 中的方法
            context.commit('ADD', value)
        },
        addOdd(context, value) {
            //  判断奇偶的业务逻辑
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            setTimeout(function () {
                context.commit('ADD', value)
            }, 1000)
        }
    },
    mutations: {
        ADD(state, value) {
            console.log('mutations收到的参数 state： ', state, '参数值为：', value);
            state.sum += value
            console.log('加法已经执行了，现在store中 sum 的值为： ',state.sum);
        },
        REDUCE(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端技术栈',
    },
    getters: {
        bigSum(state) {
            return state.sum * 20
        }
    }
}
const personAbout = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_HUMAN(state, value) {
            console.log('接收到的参数：', value);
            state.personList.unshift(value)
            console.log(state.personList);
        }
    },
    state: {
        personList: [{id: '10010', name: '张三'}]
    }
}

//  提供新的对外暴露接口
export default new Vuex.Store({
    //  暴露命名空间的时候 需要使用 modules 配置项声明 store 中新注册的命名空间
    modules: {
        countAbout
    }
});
