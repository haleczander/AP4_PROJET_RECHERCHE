import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import { BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU } from "../../../data/molecules.data";

describe("LocalDataService - findMoleculesByFormule", () => {
    let service;

    beforeAll(() => {
        service = new LocalDataService();
        service.molecules = [BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU];
    });

    test("Doit retourner les molécules correspondant à la formule donnée", () => {
        const needle = "HCl"; 
        const expectedResults = [ACIDE_CHLORHYDRIQUE]; 

        const actualResults = service.findMoleculesByFormule(needle);

        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner aucune molécule si aucune formule ne correspond", () => {
        const needle = "C6H12O6"; 
        const actualResults = service.findMoleculesByFormule(needle);

        expect(actualResults).toEqual([]);
    });
});
