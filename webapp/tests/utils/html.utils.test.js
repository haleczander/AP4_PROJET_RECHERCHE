import { htmlFormulaFormatter } from "../../src/utils/html.utils";

describe("htmlFormulaFormatter", () => {
  test("remplace les chiffres par des balises <sub>", () => {
    expect(htmlFormulaFormatter("CO2")).toBe("CO<sub>2</sub>");
    expect(htmlFormulaFormatter("C6H12O6")).toBe("C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>");
    expect(htmlFormulaFormatter("H2O")).toBe("H<sub>2</sub>O");
    expect(htmlFormulaFormatter("NaCl")).toBe("NaCl");
    expect(htmlFormulaFormatter("CH3CH2OH")).toBe("CH<sub>3</sub>CH<sub>2</sub>OH");
  });

  test("retourne une chaîne vide si vide", () => {
    expect(htmlFormulaFormatter("")).toBe("");
  });

  test("ignore les chaînes sans chiffres", () => {
    expect(htmlFormulaFormatter("ABC")).toBe("ABC");
  });
});
