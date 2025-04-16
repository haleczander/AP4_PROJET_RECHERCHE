import EconomieAtomes from "../../src/indicateurs/impl/economieAtomes.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test EconomieAtomes : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new EconomieAtomes();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(0.878, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBe(null);
  });
});
