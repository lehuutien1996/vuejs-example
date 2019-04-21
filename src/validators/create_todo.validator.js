import BaseValidator from './base.validator';

export default class CreateTodoValidator extends BaseValidator {
  rules() {
    return {
      title: 'required|max:255',
      desc: 'max:255',
    };
  }

  attributes() {
    return {
      'title': 'Tiêu Đề',
      'desc': 'Mô Tả Nhẹ',
    };
  }
}
