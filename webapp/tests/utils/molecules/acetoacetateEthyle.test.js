import {
  createMoleculeReaction,
  getCMR,
  getCoefCMR,
  getCoefDanger,
  getCoefToxicite,
  getDanger,
  getMasseG,
  getNParMmol,
  getPrixEuro,
  getToxicite,
} from "../../../src/utils/molecules.utils";
import { ACETOACETATE_ETHYLE } from "../../data/molecules.data";

describe("test molecules.utils : Acetoacétate d'éthyle", () => {
  let TEST_ACETOACETATE_ETHYLE;

  beforeAll(() => {
    TEST_ACETOACETATE_ETHYLE = createMoleculeReaction(ACETOACETATE_ETHYLE);
    TEST_ACETOACETATE_ETHYLE.purete = 99;
    TEST_ACETOACETATE_ETHYLE.volume = 2.4;
    TEST_ACETOACETATE_ETHYLE.prixG = 0.016;
  });

  test("test getMasseG Acetoacétate d'éthyle", () => {
    expect(getMasseG(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(2.472, 3);
  });

  test("test getNParMmol Acetoacétate d'éthyle", () => {
    expect(getNParMmol(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(18.8, 2);
  });

  test("test getPrixEuro Acetoacétate d'éthyle", () => {
    expect(getPrixEuro(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(0.04, 2);
  });

  test("test getDanger Acetoacétate d'éthyle", () => {
    expect(getDanger(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(0.071, 3);
  });

  test("test getCoefDanger Acetoacétate d'éthyle", () => {
    expect(getCoefDanger(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(2.295, 3);
  });

  test("test getCMR Acetoacétate d'éthyle", () => {
    expect(getCMR(TEST_ACETOACETATE_ETHYLE)).toBe(0);
  });

  test("test getCoefCMR Acetoacétate d'éthyle", () => {
    expect(getCoefCMR(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(2.472, 3);
  });

  test("test getToxicite Acetoacétate d'éthyle", () => {
    expect(getToxicite(TEST_ACETOACETATE_ETHYLE)).toBe(0);
  });

  test("test getCoefToxicite Acetoacétate d'éthyle", () => {
    expect(getCoefToxicite(TEST_ACETOACETATE_ETHYLE)).toBeCloseTo(2.472, 3);
  });
});
