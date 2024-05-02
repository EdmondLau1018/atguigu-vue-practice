<template>
  <div class="todo-footer" v-show="totalTodos">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成：{{ completedTodos }}</span> / 全部：{{ totalTodos }}
        </span>
    <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['todoList'],
  data() {
    return {}
  },
  computed: {
    completedTodos() {
      // return this.todoList.reduce((pre, current) => {
      //   return pre + (current.checked ? 1 : 0)
      // }, 0)
      //  reduce 函数 pre 第一次调用的时候 pre 是预设值 ，以后的每一次调用 pre 都是上次函数运行的返回值
      return this.todoList.reduce((pre,current) => {return pre + (current.checked ? 1 : 0)},0)
    },
    totalTodos(){
      return this.todoList.length
    },
    isAll: {
      get(){
        return this.totalTodos === this.completedTodos
      },
      set(value){
        //  属性更新的时候触发操作 value 值是最后的选中状态
        // this.checkAllTodos(value)
        this.$emit('checkAllTodos',value)
      }
    }
  },
  methods: {
    handleClear (){
      // this.clearCompleted()
      this.$emit('clearCompleted')
    }
  }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
