import { LocalDataService } from "../../../src/services/impl/local.data.service";
import { BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU } from "../../molecules.data";

describe("LocalDataService", () => {
    let service;
    let mockMolecules;

    beforeEach(() => {
        service = new LocalDataService();
        mockMolecules = [BENZALDEHYDE, UREE, ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, ETHANOL, EAU];
        service.molecules = mockMolecules;
    });

    test("Vérifier le chargement des molécules définies", () => {
        expect(service.findAllMolecules()).toEqual(mockMolecules);
    });
});
