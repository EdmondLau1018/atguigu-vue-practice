//  引入 Vue
import Vue from 'vue'

//  引入插件 VueX
import Vuex from 'vuex'

//  使用插件
Vue.use(Vuex)

//  创建 actions 对象
const actions = {
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
    addWait(context,value){
        setTimeout(function () {
            context.commit('ADD',value)
        },1000)
    }
}

//  创建 mutations 对象
const mutations = {
    ADD(state, value) {
        console.log('mutations收到的参数 state： ', state, '参数值为：', value);
        state.sum += value
    },
    REDUCE(state, value) {
        state.sum -= value
    },

}

//  state 对象用于保存数据
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
});
