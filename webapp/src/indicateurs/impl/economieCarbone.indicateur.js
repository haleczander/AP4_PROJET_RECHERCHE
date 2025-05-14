import { getNbCarbone } from "../../utils/molecules.utils";
import Indicateur from "../indicateur";
import EconomieAtomesIndicateur from "./economieAtomes.indicateur";

export class EconomieCarboneIndicateur extends Indicateur {
  constructor() {
    super("Économie de Carbone", "EC");
  }

  reactionPrincipale(reaction) {
    /*
        I59/SOMME(E6:E9)
        I59 = nbCarbone Produit
        SOMME(E6:E9) = somme nbCarbone Reactifs
        */
    const nbCarboneReactifs = this.reactionService.nbCarboneReactifs(reaction);
    const nbcarboneProduit = getNbCarbone(reaction.produit);
    return nbcarboneProduit / nbCarboneReactifs;
  }

  reactionComplete(reaction) {
    return null;
  }
}

export default EconomieCarboneIndicateur;