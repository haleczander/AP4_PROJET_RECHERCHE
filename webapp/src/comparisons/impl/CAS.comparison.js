import Comparison from "../Comparison";

export default class CASComparison extends Comparison {
  sanitize(value) {
    return value.replaceAll("-", "");
  }

  matchInput(input, reference) {
    return reference.includes(input);
  }
}
