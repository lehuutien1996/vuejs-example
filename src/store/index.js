import Vue from 'vue';
import VueX from 'vuex';
import todos from './modules/todos';

Vue.use(VueX);

const debug = process.env.NODE_ENV !== 'production'

export default new VueX.Store({
  modules: {
    todos,
  },
  strict: debug,
});
