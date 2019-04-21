<template>
<div>
  <header></header>
  <section>
    <ul>
      <li class="list-item"
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:class="{'done': todo.isComplete === true}"
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
import TodoService from '../services/todo.service';

export default {
  name: 'TodoList',
  async created () {
    this.service = new TodoService();

    // Initial Data
    await this.getTodos();

    this.$root.$on('fetch_todos', async () => await this.getTodos());
  },
  methods: {
    async getTodos() {
      try {
        const { data } = await this.service.all({
          filter: {
            order: 'id DESC',
          },
        });

        this.todos = data;
      } catch (e) {
        this.todos = [];
      }
    },
  },
  data () {
    return {
      todos: [],
    };
  }
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
