<template>
 <div name="person">
   <h2>获取 App 组件中的sum {{sum}}</h2>
   <input type="text" v-model="person.name">
   <button @click="addHuman(person)">点击添加新的人类</button>
   <ul>
     <li v-for="p in personList" :key="person.id">
       {{p.name}}
     </li>
   </ul>
 </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import {nanoid} from "nanoid";
export default {
  name: "Person",
  data(){
    return {
      person: {
        id:nanoid(),
        name: ''
      }
    }
  },
  computed: {
    ...mapState(['personList','sum'])
  },
  methods: {
    ...mapMutations({addHuman:'ADD_HUMAN'})
  }
}
</script>

<style scoped>

</style>
