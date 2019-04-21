import Validator from 'validatorjs';

export default class BaseValidator {

  /**
   * @var Validator
   */
  validator = null;

  /**
   * @var Object
   */
  data = {};

  /**
   * Set data for doing validation
   *
   * @param {Object} data Data for validation
   */
  with(data = {}) {
    this.data = data;

    return this;
  }

  /**
   * Validation Rules
   *
   * @return Object validation rules
   */
  rules() {
    return {};
  }

  /**
   * Custom display for attributes
   * @return attributes Ideal attributes' name
   */
  attributes() {
    return {};
  }

  /**
   * Custom validation messages
   */
  messages() {
    return {};
  }

  initial() {
    this.validator = new Validator(this.data, this.rules());
    this.validator.setAttributeNames(this.attributes());
    // this.validator.setMessages(
    //   Validator.getDefaultLang(),
    //   this.messages()
    // );
  }

  /**
   * Assert that passed or not!
   */
  passes() {
    this.initial();

    return this.validator.passes() || false;
  }

  /**
   * Assert that failed or not!
   */
  fails() {
    this.initial();

    return this.validator.fails() || false;
  }

  errors() {
    return this.validator.errors || null;
  }
}
