import FloatValidator from "../../src/validators/impl/Float.validator";

describe("FloatValidator", () => {
    let validator;

    beforeEach(() => {
        validator = new FloatValidator(); // par défaut accepte les nombres flottants sans limite de décimales
    });

    it("should validate valid integers", () => {
        expect(validator.validate({ value: "123" })).toBe(true);  // Nombre entier positif
        expect(validator.validate({ value: "-123" })).toBe(true); // Nombre entier négatif
    });

    it("should validate valid floats", () => {
        expect(validator.validate({ value: "123.456" })).toBe(true); // Nombre flottant positif
        expect(validator.validate({ value: "-123.456" })).toBe(true); // Nombre flottant négatif
    });

    it("should invalidate floats with too many decimals when decimals is set", () => {
        validator = new FloatValidator(2); // Accepte 2 décimales maximum
        expect(validator.validate({ value: "123.456" })).toBe(false); // Trop de décimales
    });

    it("should validate floats with valid decimals when decimals is set", () => {
        validator = new FloatValidator(2); // Accepte 2 décimales maximum
        expect(validator.validate({ value: "123.45" })).toBe(true); // Exactement 2 décimales
    });

    it("should invalidate non-numeric values", () => {
        expect(validator.validate({ value: "abc" })).toBe(false); // Non numérique
        expect(validator.validate({ value: "123abc" })).toBe(false); // Contient des caractères non numériques
    });
});
