import TodoService from '@/services/todo.service';
import { getField, updateField } from 'vuex-map-fields';

const state = {
  isEditing: false,
  form: {
    id: null,
    title: '',
    desc: '',
    isComplete: false,
  },
  todos: [],
};

const getters = {
  // VueX Map Fields
  getField,

  // Only isComplete todos
  doneList: ({ todos }) => todos.filter(todo => todo.isComplete),
};

const actions = {
  async getTodos ({ commit }) {
    const service = new TodoService();

    try {
      const { data } = await service.all();

      commit('setTodos', data);
    } catch (e) {
      //
    }
  }
};

const mutations = {

  // VueX Map Fields
  updateField,

  setFormAttr (state, field, value) {
    state.form = {
      ...state.form,
      [field]: value,
    };
  },

  setEditing (state, isEditing) {
    state.isEditing = isEditing;
  },

  setForm (state, form) {
    state.form = form;
  },

  setTodos (state, todos) {
    state.todos = todos;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
