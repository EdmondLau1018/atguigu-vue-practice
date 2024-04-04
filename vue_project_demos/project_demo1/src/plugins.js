import {DemoMixin} from "@/DemoMixin";

export default {
    install(Vue) {
        //  自定义全局过滤器
        Vue.filter('mySlice',function (text) {
            return text + 'is a slut'
        })
        // 自定义指令
        Vue.directive('fbind',{
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element,binding) {
                console.log('自定义指令的第一个参数是啥来着：',element);
                element.focus()
            },
            update(element, binding) {
                console.log('自定义指令的第二个参数 好像是 绑定的数据：', binding.value);
                element.value = binding.value
            }
        })
        //  自定义混入
        Vue.mixin(DemoMixin)
        Vue.prototype.hello  = () => {
            alert('Fuck this world')
        }
    }
}
