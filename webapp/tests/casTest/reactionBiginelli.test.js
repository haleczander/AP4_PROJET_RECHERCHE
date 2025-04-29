import MasseDechetsIndicateur from "../../src/indicateurs/impl/masseDechets.indicateur";
import { ReactionService } from "../../src/services";
import {
  atomesSum,
  formulaParser,
  moleculeFormulaParser,
} from "../../src/utils/molecules.utils";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe("test Reaction Biginelli", () => {
  let reaction;

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
  });

  test("test Masse déchets : Réaction principale", () => {
    const indicateur = new MasseDechetsIndicateur();
    expect(indicateur.reactionPrincipale(reaction)).toBeCloseTo(2.087, 3);
  });
  test("test Masse déchets : Réaction complète", () => {
    const indicateur = new MasseDechetsIndicateur();
    expect(indicateur.reactionComplete(reaction)).toBeCloseTo(10.257, 3);
  });
});

describe("residuReaction", () => {
  let reaction;
  let service = new ReactionService();

  beforeAll(() => {
    reaction = REACTION_BIGINELLI;
  });

  test("calcule les résidus atomiques entre les réactifs et le produit", () => {
    const reactifs = { C: 14, H: 20, N: 2, O: 5 }; // C14H20N2O5
    const produit = { C: 13, H: 16, N: 2, O: 3 }; // C13H16N2O3
    const expectedDiff = { C: 1, H: 4, N: 0, O: 2 };

    expect(service.residuReaction(reaction)).toEqual(expectedDiff);
  });
});
