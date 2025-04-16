import EconomieCarbone from "../../src/indicateurs/impl/economieCarbone.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test EconomieCarbone : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new EconomieCarbone();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(1.0, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBe(null);
  });
});
