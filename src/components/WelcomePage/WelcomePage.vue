<template>
<div>
  <router-link :to="{ name: 'welcome' }">Welcome Page</router-link>
  <router-link :to="{ name: 'todo' }">Todo Page</router-link>
</div>
</template>

<script>
export default {
  name: 'WelcomePage',
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #0f0f0f;
  padding: 6px 8px;
  background-color: #ecf0f1;
  border-radius: 4px;
  margin: 0 8px;
}
</style>
