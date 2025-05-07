import { formatFormulaToSubscript } from "../../src/utils/html.utils";

describe("formatFormulaToSubscript", () => {
  test("remplace les chiffres par des balises <sub>", () => {
    expect(formatFormulaToSubscript("CO2")).toBe("CO<sub>2</sub>");
    expect(formatFormulaToSubscript("C6H12O6")).toBe("C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>");
    expect(formatFormulaToSubscript("H2O")).toBe("H<sub>2</sub>O");
    expect(formatFormulaToSubscript("NaCl")).toBe("NaCl");
    expect(formatFormulaToSubscript("CH3CH2OH")).toBe("CH<sub>3</sub>CH<sub>2</sub>OH");
  });

  test("retourne une chaîne vide si vide", () => {
    expect(formatFormulaToSubscript("")).toBe("");
  });

  test("ignore les chaînes sans chiffres", () => {
    expect(formatFormulaToSubscript("ABC")).toBe("ABC");
  });
});
