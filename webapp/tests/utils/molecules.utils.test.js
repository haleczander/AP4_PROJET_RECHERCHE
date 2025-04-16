import {
  atomesDiff,
  atomesSum,
  formulaParser,
} from "../../src/utils/molecules.utils";

describe("formulaParser", () => {
  test("parse une formule chimique simple", () => {
    const formula = "H2O";
    expect(formulaParser(formula)).toEqual({ H: 2, O: 1 });
  });

  test("parse une formule chimique avec un coefficient", () => {
    const formula = "C6H12O6";
    expect(formulaParser(formula)).toEqual({ C: 6, H: 12, O: 6 });
  });

  test("parse une formule chimique avec un coefficient donné", () => {
    const formula = "H2O";
    expect(formulaParser(formula, 2)).toEqual({ H: 4, O: 2 });
  });

  test("gère les éléments avec des quantités non spécifiées", () => {
    const formula = "CH4";
    expect(formulaParser(formula)).toEqual({ C: 1, H: 4 });
  });
});

describe("atomesDiff", () => {
  let A, B, C;

  beforeAll(() => {
    A = { C: 2, H: 6, O: 1 }; // Exemple : C2H6O
    B = { C: 1, H: 4 }; // Exemple : CH4
    C = { H: 6, O: 2 }; // Autre cas
  });

  test("soustraction simple (A - B)", () => {
    expect(atomesDiff(A, B)).toEqual({ C: 1, H: 2, O: 1 });
  });

  test("soustraction avec atome manquant dans ensemble (B - A)", () => {
    expect(atomesDiff(B, A)).toEqual({ C: -1, H: -2, O: -1 });
  });

  test("soustraction avec élément absent dans sousEnsemble", () => {
    expect(atomesDiff(A, {})).toEqual({ C: 2, H: 6, O: 1 });
  });

  test("soustraction avec tous les atomes absents", () => {
    expect(atomesDiff({ N: 3 }, { C: 1 })).toEqual({ N: 3, C: -1 });
  });

  test("résultat avec des valeurs nulles", () => {
    expect(atomesDiff({ C: 1 }, { C: 1 })).toEqual({ C: 0 });
  });
});

describe("atomesSum", () => {
  test("additionne plusieurs dictionnaires d’atomes", () => {
    const input = [
      { C: 0, O: 1 },
      { C: 2, H: 3 },
      { H: 2, N: 1 },
    ];
    const expected = { C: 2, O: 1, H: 5, N: 1 };
    expect(atomesSum(input)).toEqual(expected);
  });

  test("renvoie un dictionnaire vide pour une liste vide", () => {
    expect(atomesSum([])).toEqual({});
  });

  test("gère un seul élément", () => {
    expect(atomesSum([{ C: 1, H: 2 }])).toEqual({ C: 1, H: 2 });
  });
});
