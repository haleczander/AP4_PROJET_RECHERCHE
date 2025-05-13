import FormulaValidator from "../../src/validators/impl/Formula.validator";

describe("FormulaValidator", () => {
    let validator;

    beforeEach(() => {
        validator = new FormulaValidator();
    });

    it("should validate correct formulas", () => {
        expect(validator.validate({ value: "H2O" })).toBe(true);
        expect(validator.validate({ value: "C6H12O6" })).toBe(true);
        expect(validator.validate({ value: "NaCl" })).toBe(true);
        expect(validator.validate({ value: "CH3COOH" })).toBe(true);
    });

    it("should invalidate incorrect formulas", () => {
        expect(validator.validate({ value: "h2o" })).toBe(false);       // lowercase non autorisé
        expect(validator.validate({ value: "123" })).toBe(false);       // que des chiffres
        expect(validator.validate({ value: "C6H12O6!" })).toBe(false);  // caractère spécial
        expect(validator.validate({ value: "O2C$H3" })).toBe(false);    // caractère spécial
    });

    it("should validate formulas without numbers", () => {
        expect(validator.validate({ value: "CHON" })).toBe(true); // formule sans chiffres
    });

    it("should invalidate incorrect element casing", () => {
        expect(validator.validate({ value: "c6h12o6" })).toBe(false); // éléments non majuscules
    });
});
