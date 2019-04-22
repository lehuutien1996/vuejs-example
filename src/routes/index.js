import WelcomePage from '@/components/WelcomePage/WelcomePage.vue';
import TodoPage from '@/components/TodoPage/TodoPage.vue';

const routes = [
  {
    name: 'welcome',
    path: '/',
    component: WelcomePage,
  },
  {
    name: 'todo',
    path: '/todo',
    component: TodoPage,
    meta: {
      requiresAuth: true,
    }
  }
];

export default routes;
