<template>
  <div class="todo-wrap">
    <TodoHeader :addTodoObj="addTodoObj"/>
    <TodoList :todoList="todoList"
              :removeFromList="removeFromList"
              :checkTodo="checkTodo"
    />
    <TodoFooter :todoList="todoList"
                :checkAllTodos="checkAllTodos"
                :clearCompleted="clearCompleted"
    />
  </div>
</template>

<script>

import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
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
  },
  mounted() {
  },
  methods: {
    addTodoObj(todoObj){
      this.todoList.unshift(todoObj)
    },
    //  删除
    removeFromList(id){
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    //  勾选某一项 (取消勾选)
    checkTodo(id){
      this.todoList.forEach(item => {
        if (item.id === id) item.checked = !item.checked
      })
    },
    checkAllTodos(checked){
      if (checked) {
        this.todoList.forEach(item => item.checked = true)
      } else {
        this.todoList.forEach(item => item.checked = false)
      }
    },
    //  清除所有已完成任务
    clearCompleted(){
      this.todoList = this.todoList.filter(item => item.checked === false)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
