import CoefCMRIndicateur from "../../src/indicateurs/impl/coefCMR.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test MasseDechetsIndicateur : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new CoefCMRIndicateur();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(1.0, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBeCloseTo(1.0, 3);
  });
});
