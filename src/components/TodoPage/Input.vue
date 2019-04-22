<template>
<div class="input-container">
  <div class="input-wrapper">
    <label for="todo_title" class="input-label">
      <span>Title * </span>
      <small class="validator-message"
        v-if="!!validator && validator.errors().has('title')"
      >{{ validator.errors().first('title') }}</small>
    </label>
    <input class="input-control" type="text" name="title" id="todo_title"
      v-model="input.title"
    />
  </div>
  <div class="input-wrapper">
    <label for="todo_desc" class="input-label">
      <span>Description (optional) </span>
      <small class="validator-message"
        v-if="!!validator && validator.errors().has('desc')"
      >{{ validator.errors().first('desc') }}</small>
    </label>
    <textarea class="input-control" name="desc" id="todo_desc" rows="3"
      v-model="input.desc"
    ></textarea>
  </div>
  <div class="input-wrapper">
    <label for="todo_isComplete" class="input-label">
      <input type="checkbox" name="isComplete" id="todo_isComplete"
        v-model="input.isComplete"
      >
      <span> Mark this todo is complete or not?</span>
    </label>
  </div>
  <div class="input-wrapper">
    <button class="btn btn-primary" @click="save">Save</button>
  </div>
  <small class="caption">*: This field is required</small>
  <div class="preview-box"
    v-if="!!input.title || !!input.desc"
  >
    <small>Preview Box</small>
    <div class="content">
      <h4 v-if="!!input.title">{{ input.title }}</h4>
      <p v-if="!!input.desc">{{ input.desc }}</p>
    </div>
  </div>
</div>
</template>

<script>
import CreateValidator from '@/validators/create_todo.validator';
import TodoService from '@/services/todo.service';

export default {
  name: 'Input',
  data () {
    return {
      isEditing: false,
      validator: null,
      service: null,
      input: {},
    };
  },
  // HOOKS
  async created () {
    this.service = new TodoService();

    // Event Handlers
    this.$root.$on('edit_todo', this.editTodo);
  },
  // METHODS
  methods: {
    async save () {
      const data = this.input;

      this.validator = new CreateValidator();
      this.validator.with(data);

      if (this.validator.passes()) {
        try {
          if (this.isEditing) {
            await this.service.update(data.id, data);
            this.isEditing = false;
          } else {
            await this.service.store(data);
          }
          this.clearInput();

          this.$root.$emit('fetch_todos');
        } catch (e) {
          //
        }
      }
    },
    editTodo(todo) {
      this.isEditing = true;
      this.input = todo;
    },
    clearInput() {
      this.input = {};
      this.validator = null;
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .input-container {
    width: 720px;
    margin: 0 auto;
  }
}
.input-wrapper {
  text-align: left;
  margin-bottom: 10px;
}
.input-wrapper .input-label {
  font-size: 14px;
  font-weight: 700;
  display: block;
}
.input-wrapper .input-control {
  font-size: 14px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  padding: 10px;
  background-color: #fff;
}
.caption {
  display: block;
  margin: 10px 0;
}
.preview-box {
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  overflow: hidden;
}
.preview-box .content {
  padding: 0 10px;
}
.preview-box small {
  display: block;
  padding: 5px;
  background-color: #ecf0f1;
}
.preview-box h4 {
  margin: 10px 0 10px;
}
.preview-box p {
  white-space: pre-wrap;
}
.btn {
  cursor: pointer;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
}
.btn-primary {
  color: #fff;
  background-color: #7060ff;
  border-color: #5444e0;
}
</style>
