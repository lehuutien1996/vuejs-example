import Vue from 'vue';
import VueRouter from 'vue-router';
import './config';
import routes from './routes';
import App from './App.vue';
import store from './store';

// Global Config
Vue.config.productionTip = false

// Configure Router
Vue.use(VueRouter);

new Vue({
  el: '#app',
  store, // VueX Store
  router: new VueRouter({
    mode: 'history', // Removing HashBang #
    routes,
  }),
  render: h => h(App),
});
