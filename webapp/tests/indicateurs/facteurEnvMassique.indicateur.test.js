import FacteurEnvMassique from "../../src/indicateurs/impl/facteurEnvMassique.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test FacteurEnvMassique : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new FacteurEnvMassique();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(0.835, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBeCloseTo(4.103, 3);
  });
});
