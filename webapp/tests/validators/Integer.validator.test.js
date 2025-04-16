import IntegerValidator from "../../src/validators/impl/Integer.validator";

describe("IntegerValidator", () => {
    const validator = new IntegerValidator();

    it("should validate valid integers", () => {
        expect(validator.validate({ value: "123" })).toBe(true);  // Nombre entier positif
        expect(validator.validate({ value: "-123" })).toBe(true); // Nombre entier négatif
    });

    it("should invalidate non-integer values", () => {
        expect(validator.validate({ value: "123.45" })).toBe(false); // Nombre flottant
        expect(validator.validate({ value: "abc" })).toBe(false);   // Chaîne de caractères non numérique
        expect(validator.validate({ value: "" })).toBe(false);      // Chaîne vide
    });

    it("should invalidate values with extra spaces", () => {
        expect(validator.validate({ value: " 123 " })).toBe(false); // Espaces autour de l'entier
        expect(validator.validate({ value: " -123 " })).toBe(false); // Espaces autour de l'entier
    });
});