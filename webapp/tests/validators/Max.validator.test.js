import MaxValidator from "../../src/validators/impl/Max.validator";

describe("MaxValidator - règles de validation complètes", () => {
  let validator;

  beforeEach(() => {
    validator = new MaxValidator(10);
  });

  it("should return true for values ≤ max", () => {
    expect(validator.validate({ value: "0" })).toBe(true);
    expect(validator.validate({ value: "5" })).toBe(true);
    expect(validator.validate({ value: "9.99" })).toBe(true);
    expect(validator.validate({ value: "10" })).toBe(true);
  });

  it("should return false for values > max", () => {
    expect(validator.validate({ value: "10.01" })).toBe(false);
    expect(validator.validate({ value: "11" })).toBe(false);
    expect(validator.validate({ value: "1000" })).toBe(false);
  });

  it("should return false for non-numeric values", () => {
    expect(validator.validate({ value: "abc" })).toBe(false);
    expect(validator.validate({ value: "10abc" })).toBe(false);
    expect(validator.validate({ value: "ten" })).toBe(false);
  });

  it("should return false for empty, null, or undefined values", () => {
    expect(validator.validate({ value: "" })).toBe(false);
    expect(validator.validate({ value: null })).toBe(false);
    expect(validator.validate({ value: undefined })).toBe(false);
  });
});
