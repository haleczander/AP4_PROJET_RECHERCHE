import Comparison from "../Comparison";

export default class ContainsIgnoreCaseComparison extends Comparison {
  sanitize(value) {
    return value.toUpperCase();
  }

  matchInput(input, reference) {
    return reference.includes(input);
  }
}
