import FacteurEnvMolaire from "../../src/indicateurs/impl/facteurEnvMolaire.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test FacteurEnvMolaire : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new FacteurEnvMolaire();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(0.138, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBe(null);
  });
});
