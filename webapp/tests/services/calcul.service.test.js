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
  const indicateurs = [];

  beforeAll(() => {
    service = new CalculService();
    indicateurs.push(new CoefCMRIndicateur());
    indicateurs.push(new CoefDangerIndicateur());
    indicateurs.push(new CoefToxiciteIndicateur());
    indicateurs.push(new CoutMassiqueIndicateur());
    indicateurs.push(new EconomieAtomesIndicateur());
    indicateurs.push(new EconomieCarboneIndicateur());
    indicateurs.push(new EfficaciteMassiqueIndicateur());
    indicateurs.push(new FacteurEnvMassiqueIndicateur());
    indicateurs.push(new FacteurEnvMolaireIndicateur());
    indicateurs.push(new FacteurStoechiometriqueInverseIndicateur());
    indicateurs.push(new FacteurStoechiometriqueIndicateur());
    indicateurs.push(new MasseDechetsIndicateur());
    indicateurs.push(new PRMmIndicateur());
    indicateurs.push(new RatioReactifMinReactifMaxIndicateur());
    indicateurs.push(new RendementIndicateur());

    reaction = REACTION_BIGINELLI;
  });

  test("test calculReactionPrincipale", () => {
    const expected = {
      "1/FSt": 0.807,
      "1/Fst,n": 0.658,
      CMR: 1,
      Danger: 0.9,
      EA: 0.878,
      EC: 1,
      EM: 0.138,
      EMR: 0.545,
      Em: 0.835,
      FSt: 1.239,
      PRMm: 0,
      Tox: 1,
      masseDechets: 2.087,
      ρ: 0.769,
      "€/g": 0.123,
    };

    expect(
      service.calculReactionPrincipale(reaction, ...indicateurs),
    ).toStrictEqual(expected);
  });

  test("test calculReactionComplete", () => {
    const expected = {
      CMR: 1,
      Danger: 0.882,
      EMR: 0.196,
      Em: 4.103,
      FSt: 3.447,
      PRMm: 0,
      Tox: 1,
      masseDechets: 10.257,
      "€/g": 0.213,
    };
    expect(
      service.calculReactionComplete(reaction, ...indicateurs),
    ).toStrictEqual(expected);
  });
});
