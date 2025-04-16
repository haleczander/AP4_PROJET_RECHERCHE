import RatioReactifMinReactifMax from "../../src/indicateurs/impl/ratioReactifMinReactifMax.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test RatioReactifMinReactifMax : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new RatioReactifMinReactifMax();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(0.658, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBe(null);
  });
});
