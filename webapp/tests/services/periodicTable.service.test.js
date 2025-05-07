import TablePeriodiqueService from "../../src/services/tablePeriodique.service";


describe("PeriodicTableService", () => {
  let service;

  beforeAll(async () => {
    service = new TablePeriodiqueService();
  });

  test("getMasseAtomique retourne la bonne masse", () => {
    expect(service.getMasseAtomique("H")).toBeCloseTo(1.008);
    expect(service.getMasseAtomique("O")).toBeCloseTo(15.999);
  });

  test("getMasseAtomique lève une erreur si élément inconnu", () => {
    expect(() => service.getMasseAtomique("X")).toThrow("Element with symbol X not found");
  });

  test("getMasseMoleculaire calcule correctement une masse", () => {
    const masse = service.getMasseMoleculaire({ H: 2, O: 1, C: 1 }); // H2O
    expect(masse).toBeCloseTo(2 * 1.008 + 15.999 + 12.011);
  });
});
