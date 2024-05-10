<template>
  <div name="countComponent">
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和的 20 倍为：</h2>
    <h2>目前跟着 ： ,学习 :</h2>
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
import {mapMutations, mapState} from "vuex";

export default {
  name: "CountComponent",
  data(){
    return {
      n:0
    }
  },
  methods: {
    ...mapMutations('countAbout',{increment:'ADD'})
  },
  computed: {
    ...mapState('countAbout',['sum'])
  },
}
</script>

<style scoped>

</style>
