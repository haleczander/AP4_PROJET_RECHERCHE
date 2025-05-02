import MinValidator from "../../src/validators/impl/Min.validator";

describe("MinValidator - règles de validation complètes", () => {
  let validator;

  beforeEach(() => {
    validator = new MinValidator(5);
  });

  it("should return true for values ≥ min", () => {
    expect(validator.validate({ value: "5" })).toBe(true);
    expect(validator.validate({ value: "5.1" })).toBe(true);
    expect(validator.validate({ value: "100" })).toBe(true);
  });

  it("should return false for values < min", () => {
    expect(validator.validate({ value: "4.99" })).toBe(false);
    expect(validator.validate({ value: "0" })).toBe(false);
    expect(validator.validate({ value: "-1" })).toBe(false);
  });

  it("should return false for non-numeric values", () => {
    expect(validator.validate({ value: "abc" })).toBe(false);
    expect(validator.validate({ value: "5abc" })).toBe(false);
  });

  it("should return false for empty, null, or undefined values", () => {
    expect(validator.validate({ value: "" })).toBe(false);
    expect(validator.validate({ value: null })).toBe(false);
    expect(validator.validate({ value: undefined })).toBe(false);
  });
});
