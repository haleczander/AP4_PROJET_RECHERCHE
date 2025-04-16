import ReactionService from "../../services/reaction.service";
import { getNParMmol } from "../../utils/molecules.utils";
import Indicateur from "../indicateur";

export class ratioNreactifsMinSurMaxIndicateur extends Indicateur {
  constructor() {
    super("nréactif min / nréactif max", "1/Fst,n");
    this.reactionService = new ReactionService();
  }

  reactionPrincipale(reaction) {
    /*
        =MIN(I6:I9)/MAX(I6:I9)
        MIN(I6:I9) = min n/mol reactifs
        MAX(I6:I9) = max n/mol reactifs
        */
    const nMolReactifs = this.reactionService
      .reactifs(reaction)
      .map(getNParMmol);
    const nMolMinReactifs = Math.min(...nMolReactifs);
    const nMolMaxReactifs = Math.max(...nMolReactifs);
    return nMolMinReactifs / nMolMaxReactifs;
  }

  reactionComplete(reaction) {
    return null;
  }
}

export default ratioNreactifsMinSurMaxIndicateur;
