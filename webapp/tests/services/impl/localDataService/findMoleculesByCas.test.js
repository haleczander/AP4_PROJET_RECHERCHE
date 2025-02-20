import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import { BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU } from "../../../data/molecules.data";

describe("LocalDataService - findMoleculesByCas", () => {
    let service;

    beforeAll(() => {
        service = new LocalDataService();
        service.molecules = [BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU];
    });

    test("Doit retourner les molécules correspondant au CAS donné", () => {
        const needle = "7647-01-0";
        const expectedResults = [ACIDE_CHLORHYDRIQUE];

        const actualResults = service.findMoleculesByCas(needle);
    
        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner aucune molécule si aucun CAS ne correspond", () => {
        const needle = "000-00-00";
        const actualResults = service.findMoleculesByCas(needle);
    
        expect(actualResults).toEqual([]);
    });
});
