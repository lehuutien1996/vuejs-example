<template>
<div>
  <header></header>
  <section>
    <ul>
      <li class="list-item"
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:class="{'done': todo.isComplete === true}"
        @click="editTodo(todo)"
      >
        <a href="javascript:void(0);">
          <h5>{{ todo.title }}</h5>
          <p>{{ todo.desc }}</p>
        </a>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  computed: {
    ...mapState({
      todos: ({ todos }) => todos.todos,
    }),
  },
  created () {
    this.$store.dispatch('todos/getTodos');
  },
  methods: {
    editTodo(todo) {
      this.$store.commit('todos/setEditing', true);
      this.$store.commit('todos/setForm', { ...todo });
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px 0;
  border-bottom: 1px solid #ecf0f1;
}
li:hover {
  background-color: #ecf0f1;
}
li:last-child {
  border-bottom: none;
}
li.done {
  text-decoration: line-through;
}
a {
  display: block;
  font-style: none;
  text-decoration: none;
  color: #0f0f0f;
  padding: 5px;
}
h5 {
  margin: 0;
  margin-bottom: 5px;
}
p {
  margin: 0;
}
</style>
