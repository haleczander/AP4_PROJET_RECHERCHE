import RegexValidator from "../../src/validators/impl/Regex.validator";

describe("RegexValidator", () => {
    it("should validate value matching the regex", () => {
        const validator = new RegexValidator(/^\d+$/); // only digits
        const element = { value: "12345" };
        expect(validator.validate(element)).toBe(true);
    });

    it("should invalidate value not matching the regex", () => {
        const validator = new RegexValidator(/^\d+$/);
        const element = { value: "abc123" };
        expect(validator.validate(element)).toBe(false);
    });

    it("should handle empty strings", () => {
        const validator = new RegexValidator(/^$/); // only empty string
        const element = { value: "" };
        expect(validator.validate(element)).toBe(true);
    });
});