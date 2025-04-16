import EfficaciteMassique from "../../src/indicateurs/impl/efficaciteMassique.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test EfficaciteMassique : Reaction de Biginelli", () => {
  let reaction;
  let indicateur;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
    indicateur = new EfficaciteMassique();
  });

  test("Réaction Principale", () => {
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(0.545, 3);
  });

  test("Réaction complète", () => {
    expect(indicateur.reactionComplete(reaction)).toBeCloseTo(0.196, 3);
  });
});
