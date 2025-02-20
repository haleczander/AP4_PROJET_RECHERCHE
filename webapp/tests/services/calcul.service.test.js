import CalculService from "../../src/services/calcul.service";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";
import CoefCMRIndicateur from "../../src/indicateurs/impl/coefCMR.indicateur";
import CoefDangerIndicateur from "../../src/indicateurs/impl/coefDanger.indicateur";
import CoefToxiciteIndicateur from "../../src/indicateurs/impl/coefToxicite.indicateur";
import CoutMassiqueIndicateur from "../../src/indicateurs/impl/coutMassique.indicateur";
import EconomieAtomesIndicateur from "../../src/indicateurs/impl/economieAtomes.indicateur";
import EconomieCarboneIndicateur from "../../src/indicateurs/impl/economieCarbone.indicateur";
import EfficaciteMassiqueIndicateur from "../../src/indicateurs/impl/efficaciteMassique.indicateur";
import FacteurEnvMassiqueIndicateur from "../../src/indicateurs/impl/facteurEnvMassique.indicateur";
import FacteurEnvMolaireIndicateur from "../../src/indicateurs/impl/facteurEnvMolaire.indicateur";
import FacteurStoechiometriqueInverseIndicateur from "../../src/indicateurs/impl/facteurStoechiometriqueInverse.indicateur";
import FacteurStoechiometriqueIndicateur from "../../src/indicateurs/impl/facteurStoechiometrique.indicateur";
import MasseDechetsIndicateur from "../../src/indicateurs/impl/masseDechets.indicateur";
import PRMmIndicateur from "../../src/indicateurs/impl/PRMm.indicateur";
import RatioReactifMinReactifMaxIndicateur from "../../src/indicateurs/impl/ratioReactifMinReactifMax.indicateur";
import RendementIndicateur from "../../src/indicateurs/impl/rendement.indicateur";

describe("Test du service de calcul", () => {
    let service;
    let reaction;

    beforeAll(() => {
        service = new CalculService();
        service.indicateurs.push(new CoefCMRIndicateur());
        service.indicateurs.push(new CoefDangerIndicateur());
        service.indicateurs.push(new CoefToxiciteIndicateur());
        service.indicateurs.push(new CoutMassiqueIndicateur());
        service.indicateurs.push(new EconomieAtomesIndicateur());
        service.indicateurs.push(new EconomieCarboneIndicateur());
        service.indicateurs.push(new EfficaciteMassiqueIndicateur());
        service.indicateurs.push(new FacteurEnvMassiqueIndicateur());
        service.indicateurs.push(new FacteurEnvMolaireIndicateur());
        service.indicateurs.push(new FacteurStoechiometriqueInverseIndicateur());
        service.indicateurs.push(new FacteurStoechiometriqueIndicateur());
        service.indicateurs.push(new MasseDechetsIndicateur());
        service.indicateurs.push(new PRMmIndicateur());
        service.indicateurs.push(new RatioReactifMinReactifMaxIndicateur());
        service.indicateurs.push(new RendementIndicateur());

        reaction = REACTION_BIGINELLI;
    });

    test("test calculReaction", () => {
        const expected = {
        "1/FSt": { complete: 0, principale: 0.807 },
        "1/Fst,n": { complete: 0, principale: 0.658 },
        "CMR": { complete: 1, principale: 1 },
        "Danger": { complete: 0.882, principale: 0.9 },
        "EA": { complete: 0, principale: 0.878 },
        "EC": { complete: 0, principale: 1 },
        "EM": { complete: 0, principale: 0.138 },
        "EMR": { complete: 0.196, principale: 0.545 },
        "Em": { complete: 4.103, principale: 0.835 },
        "FSt": { complete: 3.447, principale: 1.239 },
        "PRMm": { complete: 0, principale: 0 },
        "Tox": { complete: 1, principale: 1 },
        "masseDechets": { complete: 10.257, principale: 2.087 },
        "ρ": { complete: 0, principale: 0.769 },
        "€/g": { complete: 0.213, principale: 0.123 },
        };

        expect(
            service.calculReaction(reaction, 3)
        ).toStrictEqual(
            expected
        );
    }
    );
});
