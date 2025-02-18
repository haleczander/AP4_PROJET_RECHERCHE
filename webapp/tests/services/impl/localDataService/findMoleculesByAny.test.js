import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import { BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU } from "../../../molecules.data";

describe("LocalDataService - findMoleculesByAny", () => {
    let service;

    beforeAll(() => {
        service = new LocalDataService();
        service.molecules = [BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU];
    });

    test("Doit retourner les molécules contenant 'CH'", () => {
        const needle = "CH";
        const expectedResults = [UREE,ACIDE_CHLORHYDRIQUE];
 
        const actualResults = service.findMoleculesByAny(needle);

        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner la molécule correspondant à 'Acide chlorhydrique'", () => {
        const needle = "Acide chlorhydrique";
        const expectedResults = [ACIDE_CHLORHYDRIQUE];

        const actualResults = service.findMoleculesByAny(needle);

        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner la molécule correspondant au CAS '64-17-5'", () => {
        const needle = "64-17-5";
        const expectedResults = [ETHANOL];

        const actualResults = service.findMoleculesByAny(needle);

        expect(actualResults).toEqual(expectedResults);
    });
});
