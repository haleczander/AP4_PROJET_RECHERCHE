import RequiredValidator from "../../src/validators/impl/Required.validator";

describe("RequiredValidator", () => {
    const validator = new RequiredValidator();

    it("should accept non-empty strings", () => {
        expect(validator.validate({ value: "hello" })).toBe(true);
        expect(validator.validate({ value: "  world  " })).toBe(true);
    });

    it("should reject empty or whitespace-only strings", () => {
        expect(validator.validate({ value: "" })).toBe(false);
        expect(validator.validate({ value: "   " })).toBe(false);
    });

    it("should reject undefined and null", () => {
        expect(validator.validate({ value: undefined })).toBe(false);
        expect(validator.validate({ value: null })).toBe(false);
    });

    it("should accept non-string defined values", () => {
        expect(validator.validate({ value: 0 })).toBe(true);
        expect(validator.validate({ value: false })).toBe(true);
        expect(validator.validate({ value: [] })).toBe(true);
    });
});
