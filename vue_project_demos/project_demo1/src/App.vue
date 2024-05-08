<template>
  <div>
    <Person/>
    <hr>
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和的 20 倍为：{{bigSum}}</h2>
    <h2>目前跟着 ：{{school}} ,学习 ：{{subject}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import Person from "@/components/Person";
export default {
  name:'Count',
  components: {Person},
  data() {
    return {
      n:1, //用户选择的数字
    }
  },
  computed:{
    //  ES6 语法相当于把这个对象中的所有属性展开放在 computed 中
    ...mapState({sum:'sum',school:'school',subject:'subject'}),
    //  使用数组的形式 通过 mapGetters 获取 getters 的属性
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment(){
    //   this.$store.dispatch('add',this.n)
    // },
    // decrement(){
    //   //  在没有业务逻辑的情况下可以直接通过 commit 调用 mutations 里的函数
    //   this.$store.commit('REDUCE',this.n)
    // },
    ...mapMutations({increment:'ADD',decrement:'REDUCE'}),
    incrementOdd(){
      this.$store.dispatch('addOdd',this.n)
    },
    incrementWait(){
      this.$store.dispatch('addWait',this.n)
    },
  },
}
</script>

<style lang="css">
button{
  margin-left: 5px;
}
</style>
