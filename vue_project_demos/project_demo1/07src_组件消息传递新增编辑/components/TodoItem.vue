<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.checked" @click="handleCheck"/>
      <span v-show="!todoObj.isEdit">{{ todoObj.name }}</span>
      <!--当失去焦点的时候视为编辑完成 ，将事件作为参数 事件携带修改后的数据-->
      <input ref="inputTitle" v-show="todoObj.isEdit" :value="todoObj.name" @blur="editOk(todoObj,$event)"/>
    </label>
    <button class="btn btn-danger" @click="handleDelete">删除</button>
    <button class="btn btn-primary" @click="handleEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "TodoItem",
  props: ['todoObj'],
  data() {
    return {}
  },
  methods: {
    //  在子组件中触发全局事件总线中绑定的事件
    handleDelete() {
      // this.removeFromList(this.todoObj.id)
      // this.$bus.$emit('removeFromList',this.todoObj.id)
      pubsub.publish('removeFromList', this.todoObj.id)
    },
    handleCheck() {
      // this.checkTodo(this.todoObj.id)
      this.$bus.$emit('checkTodo', this.todoObj.id)
    },
    handleEdit(todoObj) {
      //  判断当前对象是否有 isEdit 属性
      if (todoObj.hasOwnProperty('isEdit')) {
        //  修改 isEdit 属性值
        todoObj.isEdit = true
      } else {
        // 给 todoObj 新增新的属性
        console.log('需要新增属性的对象：', todoObj);
        this.$set(todoObj, 'isEdit', true)
      }
      //  获取焦点  // 通过 ref 的形式获取页面元素
      this.$nextTick(function () {
        //  在正常执行的过程中 代码执行到这里的时候 页面元素还没有出现 所以 Vue 不会重新解析模板
        //  通过 $nextTick 标识下次页面解析的时候执行这个代码 也就是 input 框自动获取焦点
        this.$refs.inputTitle.focus()
      })
    },
    editOk(todoObj,e) {
      todoObj.isEdit = false
      console.log(e.target.value);
      if (e.target.value.trim() == null || e.target.value == '') {
        alert('输入内容不能为空')
        return
      }
      //  通过全局事件总线 向 App 组件传递数据 // 在 App 组件中编写 修改 的回调函数
      this.$bus.$emit('updateTodo',todoObj.id,e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
}

li:hover button {
  display: block;
}
</style>
