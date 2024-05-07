<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h2>当前求和的 20 倍为：{{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name:'Count',
  data() {
    return {
      n:1, //用户选择的数字
      sum:0 //当前的和
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('add',this.n)
    },
    decrement(){
      //  在没有业务逻辑的情况下可以直接通过 commit 调用 mutations 里的函数
      this.$store.commit('REDUCE',this.n)
    },
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
