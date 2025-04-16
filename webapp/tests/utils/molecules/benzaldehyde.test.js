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
import { BENZALDEHYDE } from "../../data/molecules.data";

describe("test molecules.utils : Benzaldéhyde", () => {
  let TEST_BENZALDEHYDE;

  beforeAll(() => {
    TEST_BENZALDEHYDE = createMoleculeReaction(BENZALDEHYDE);
    TEST_BENZALDEHYDE.purete = 99;
    TEST_BENZALDEHYDE.volume = 1.3;
    TEST_BENZALDEHYDE.prixG = 0.035;
  });

  test("test getMasseG Benzaldéhyde", () => {
    expect(getMasseG(TEST_BENZALDEHYDE)).toBeCloseTo(1.365, 3);
  });

  test("test getNParMmol Benzaldéhyde", () => {
    expect(getNParMmol(TEST_BENZALDEHYDE)).toBeCloseTo(12.73, 2);
  });

  test("test getPrixEuro Benzaldéhyde", () => {
    expect(getPrixEuro(TEST_BENZALDEHYDE)).toBeCloseTo(0.05, 2);
  });

  test("test getDanger Benzaldéhyde", () => {
    expect(getDanger(TEST_BENZALDEHYDE)).toBeCloseTo(0.07, 2);
  });

  test("test getCoefDanger Benzaldéhyde", () => {
    expect(getCoefDanger(TEST_BENZALDEHYDE)).toBeCloseTo(1.27, 2);
  });

  test("test getCMR Benzaldéhyde", () => {
    expect(getCMR(TEST_BENZALDEHYDE)).toBe(0);
  });

  test("test getCoefCMR Benzaldéhyde", () => {
    expect(getCoefCMR(TEST_BENZALDEHYDE)).toBeCloseTo(1.365, 3);
  });

  test("test getToxicite Benzaldéhyde", () => {
    expect(getToxicite(TEST_BENZALDEHYDE)).toBe(0);
  });

  test("test getCoefToxicite Benzaldéhyde", () => {
    expect(getCoefToxicite(TEST_BENZALDEHYDE)).toBeCloseTo(1.365, 3);
  });
});
