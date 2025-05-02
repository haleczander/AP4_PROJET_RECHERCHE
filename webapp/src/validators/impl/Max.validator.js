import { REGEX_FLOAT } from "../../constants";

export default class MaxValidator {
  constructor(max) {
    this.max = max;
    this.regex = REGEX_FLOAT;
    this.errorMessageId = `error-msg-MaxValidator`;
  }

  get message() {
    return `Le nombre doit être un décimal ≤ ${this.max}`;
  }

  validate(element) {
    const value = String(element.value);
    const isFloat = this.regex.test(value);
    const parsed = parseFloat(value);
    const valid = isFloat && parsed <= this.max;

    element.errors = element.errors || {};
    delete element.errors[this.errorMessageId];
    element.valid = valid;

    if (!valid) {
      element.errors[this.errorMessageId] = this.message;
    }

    return valid;
  }
}
