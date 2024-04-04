<template>
  <ul class="todo-main">
    <TodoItem v-for="todoObj in todoList" :key="todoObj.id" :todoObj="todoObj"/>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  props: {},
  components: {TodoItem},
  data() {
    return {
      todoList: [
        {id: '001',name: '锻炼',checked: false},
        {id: '002',name: '吃饭',checked: true},
        {id: '003',name: '嫖娼',checked: true},
        {id: '004',name: '搞点钱',checked: true},
        {id: '005',name: '谈对象',checked: false},
      ]
    }
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
