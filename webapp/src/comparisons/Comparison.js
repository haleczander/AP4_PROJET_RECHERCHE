export default class Comparison {
  compare(input, reference) {
    return this.matchInput(this.sanitize(input), this.sanitize(reference));
  }

  sanitize(value) {
    return value;
  }

  matchInput(input, reference) {
    return input === reference;
  }
}
