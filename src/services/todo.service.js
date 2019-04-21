import BaseService from "./base.service";

export default class TodoService extends BaseService {
  all(params = {}) {
    return this.get('todos', params);
  }

  store(data = {}) {
    return this.post('todos', data);
  }

  update(id, data = {}) {
    return this.put(`todos/${id}`, data);
  }

  delete(id) {
    return this.delete(`todos/${id}`);
  }
}
