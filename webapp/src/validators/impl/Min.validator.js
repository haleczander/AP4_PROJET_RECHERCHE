import { REGEX_FLOAT } from "../../constants";

export default class MinValidator {
  constructor(min) {
    this.min = min;
    this.regex = REGEX_FLOAT;
    this.errorMessageId = `error-msg-MinValidator`;
  }

  get message() {
    return `Le nombre doit être un décimal ≥ ${this.min}`;
  }

  validate(element) {
    const value = String(element.value);
    const isFloat = this.regex.test(value);
    const parsed = parseFloat(value);
    const valid = isFloat && parsed >= this.min;

    element.errors = element.errors || {};
    delete element.errors[this.errorMessageId];
    element.valid = valid;

    if (!valid) {
      element.errors[this.errorMessageId] = this.message;
    }

    return valid;
  }
}
