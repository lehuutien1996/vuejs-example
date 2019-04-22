import Vue from 'vue';
import VueRouter from 'vue-router';
import './config';
import routes from './routes';
import App from './App.vue';
import routerConfig from '@/config/router';

// Global Config
Vue.config.productionTip = false

// Configure Router
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: routerConfig(new VueRouter({
    mode: 'history', // Removing HashBang #
    routes
  })),
}).$mount('#app')
