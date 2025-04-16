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
import { UREE } from "../../data/molecules.data";

describe("test molecules.utils : Urée", () => {
  let TEST_UREE;

  beforeAll(() => {
    TEST_UREE = createMoleculeReaction(UREE);
    TEST_UREE.purete = 99;
    TEST_UREE.volume = 0.75;
    TEST_UREE.prixG = 0.035;
  });

  test("test getMasseG Urée", () => {
    expect(getMasseG(TEST_UREE)).toBeCloseTo(0.563, 3);
  });

  test("test getNParMmol Urée", () => {
    expect(getNParMmol(TEST_UREE)).toBeCloseTo(9.27, 2);
  });

  test("test getPrixEuro Urée", () => {
    expect(getPrixEuro(TEST_UREE)).toBeCloseTo(0.02, 3);
  });

  test("test getDanger Urée", () => {
    expect(getDanger(TEST_UREE)).toBeCloseTo(0.071, 3);
  });

  test("test getCoefDanger Urée", () => {
    expect(getCoefDanger(TEST_UREE)).toBeCloseTo(0.522, 3);
  });

  test("test getCMR Urée", () => {
    expect(getCMR(TEST_UREE)).toBe(0);
  });

  test("test getCoefCMR Urée", () => {
    expect(getCoefCMR(TEST_UREE)).toBeCloseTo(0.56, 2);
  });

  test("test getToxicite Urée", () => {
    expect(getToxicite(TEST_UREE)).toBe(0);
  });

  test("test getCoefToxicite Urée", () => {
    expect(getCoefToxicite(TEST_UREE)).toBeCloseTo(0.56, 2);
  });
});
