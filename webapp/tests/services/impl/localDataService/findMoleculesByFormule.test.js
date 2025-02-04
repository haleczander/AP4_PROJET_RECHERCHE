import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import json from "../../../../data/db.json";

describe("LocalDataService - findMoleculesByFormule", () => {
    let service;
    let expectedData;

    beforeAll(() => {
        service = new LocalDataService();
        expectedData = json.data.molecules;
    });

    test("Doit retourner les molécules correspondant à la formule donnée", () => {
        const needle = "C2H4O2";
        const expectedResults = expectedData.filter(molecule => 
            molecule.formule.toUpperCase().includes(needle.toUpperCase())
        );
    
        const actualResults = service.findMoleculesByFormule(needle);
    
        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner aucune molécule si aucune formule ne correspond", () => {
        const needle = "C6H12O6";
        const actualResults = service.findMoleculesByFormule(needle);
    
        expect(actualResults).toEqual([]);
    });
});
