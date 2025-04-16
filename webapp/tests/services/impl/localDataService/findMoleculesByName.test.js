import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import {
  BENZALDEHYDE,
  UREE,
  ACETOACETATE_ETHYLE,
  ACIDE_CHLORHYDRIQUE,
  ETHANOL,
  EAU,
} from "../../../data/molecules.data";

describe("LocalDataService - findMoleculesByName", () => {
  let service;

  beforeAll(() => {
    service = new LocalDataService();
    service.molecules = [
      BENZALDEHYDE,
      UREE,
      ACETOACETATE_ETHYLE,
      ACIDE_CHLORHYDRIQUE,
      ETHANOL,
      EAU,
    ];
  });

  test("Doit retourner la molécule correspondant à 'Urée'", () => {
    const needle = "Urée";
    const expectedResults = [UREE];

    const actualResults = service.findMoleculesByName(needle);

    expect(actualResults).toEqual(expectedResults);
  });

  test("Doit retourner la molécule correspondant à 'Ethanol'", () => {
    const needle = "Ethanol";
    const expectedResults = [ETHANOL];

    const actualResults = service.findMoleculesByName(needle);

    expect(actualResults).toEqual(expectedResults);
  });

  test("Ne doit rien retourner pour un nom inexistant", () => {
    const needle = "MoléculeInconnue";
    const expectedResults = [];

    const actualResults = service.findMoleculesByName(needle);

    expect(actualResults).toEqual(expectedResults);
  });
});
