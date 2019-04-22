<template>
  <div class="hello">
    <Input/>
    <TodoList/>
  </div>
</template>

<script>
import Input from './Input.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'Main',
  components: {
    Input,
    TodoList,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
