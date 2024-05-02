<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from "@/components/Search";
import List from "@/components/List";
export default {
  name: 'App',
  components: {Search,List},
  data() {
    return {}
  },
  mounted() {
  },
  methods: {},
  watch: {}
}
</script>

<style>
</style>
