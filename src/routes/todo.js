import TodoPage from '@/components/TodoPage/TodoPage.vue';
import Multiguard from 'vue-router-multiguard';
import auth from './guards/auth.guard';
import admin from './guards/admin.guard';

export default {
  name: 'todo',
  path: '/todo',
  component: TodoPage,
  beforeEnter: Multiguard([
    auth,
    admin,
  ]),
};
