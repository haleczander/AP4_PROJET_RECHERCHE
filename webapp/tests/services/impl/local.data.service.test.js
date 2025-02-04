import { LocalDataService } from "../../../src/services/impl/local.data.service";
import json from "../../../data/db.json";

const service = new LocalDataService();
const expectedData = json.data.molecules;

describe("LocalDataService", () => {
    test("Vérifier le chargement des données JSON", () => {
        expect(service.findAllMolecules()).toEqual(expectedData);
    });
});