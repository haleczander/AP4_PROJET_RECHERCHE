import RendementIndicateur from "../../src/indicateurs/impl/rendement.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test Rendement : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new RendementIndicateur();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(0.769, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBe(null);
  });
});
