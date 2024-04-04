<template>
  <ul class="todo-main">
    <TodoItem v-for="todoObj in todoList" :key="todoObj.id" :todoObj="todoObj"/>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  props: ['todoList'],
  components: {TodoItem},
  data() {
    return {
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
