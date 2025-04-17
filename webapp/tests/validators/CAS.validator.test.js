import CASValidator from "../../src/validators/impl/CAS.validator";

describe("CASValidator", () => {
    const validator = new CASValidator();

    it("should validate valid CAS numbers", () => {
        expect(validator.validate({ value: "1234567-89-0" })).toBe(true);  // CAS valide
        expect(validator.validate({ value: "12-34-5" })).toBe(true);      // CAS valide
        expect(validator.validate({ value: "9999999-00-9" })).toBe(true);  // CAS valide
    });

    it("should invalidate invalid CAS numbers", () => {
        expect(validator.validate({ value: "12345678-90-1" })).toBe(false); // Trop de chiffres dans la première partie
        expect(validator.validate({ value: "12-34-56" })).toBe(false);     // Trop de chiffres dans la deuxième partie
        expect(validator.validate({ value: "12-34-" })).toBe(false);       // Numéro CAS incomplet
        expect(validator.validate({ value: "abc-12-34" })).toBe(false);    // Pas un numéro CAS valide
        expect(validator.validate({ value: "1234567-89-xyz" })).toBe(false); // Partie finale incorrecte
    });
});