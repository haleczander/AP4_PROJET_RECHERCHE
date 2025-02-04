import { LocalDataService } from "../../../../src/services/impl/local.data.service";
import json from "../../../../data/db.json";

describe("LocalDataService - findMoleculesByAny", () => {
    let service;
    let expectedData;

    beforeAll(() => {
        service = new LocalDataService();
        expectedData = json.data.molecules;
    });

    test("Doit retourner toutes les molécules correspondant à la formule", () => {
        const needle = "CH";
        const expectedResults = expectedData.filter(molecule => 
            molecule.cas.includes(needle) ||
            molecule.nom.toUpperCase().includes(needle.toUpperCase()) ||
            molecule.formule.toUpperCase().includes(needle.toUpperCase())
        );
    
        const actualResults = service.findMoleculesByAny(needle);
    
        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner les molécules correspondant au nom (en majuscule ou minuscule)", () => {
        const needle = "Acide Acétique";
        const expectedResults = expectedData.filter(molecule => 
            molecule.nom.toUpperCase().includes(needle.toUpperCase())
        );
    
        const actualResults = service.findMoleculesByAny(needle);
    
        expect(actualResults).toEqual(expectedResults);
    });

    test("Doit retourner les molécules correspondant au CAS (en majuscule ou minuscule)", () => {
        const needle = "64-19-7";
        const expectedResults = expectedData.filter(molecule => 
            molecule.cas.includes(needle)
        );
    
        const actualResults = service.findMoleculesByAny(needle);
    
        expect(actualResults).toEqual(expectedResults);
    });
});
