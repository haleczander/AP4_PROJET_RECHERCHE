import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import json from "../../../../data/db.json";

describe("LocalDataService - findMoleculesByCas", () => {
    let service;
    let expectedData;

    beforeAll(() => {
        service = new LocalDataService();
        expectedData = json.data.molecules;
    });

    test("Doit retourner les molécules correspondant au CAS donné", () => {
        const needle = "64-19-7";
        const expectedResults = expectedData.filter(molecule => 
            molecule.cas.replaceAll('-', '').includes(needle.replaceAll('-', ''))
        );
    
        const actualResults = service.findMoleculesByCas(needle);
    
        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner aucune molécule si aucun CAS ne correspond", () => {
        const needle = "000-00-00";
        const actualResults = service.findMoleculesByCas(needle);
    
        expect(actualResults).toEqual([]);
    });
});
 