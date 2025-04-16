import FacteurStoechimetrique from "../../src/indicateurs/impl/facteurStoechiometrique.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test FacteurStoechimetrique : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new FacteurStoechimetrique();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(1.239, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBeCloseTo(3.447, 3);
  });
});
