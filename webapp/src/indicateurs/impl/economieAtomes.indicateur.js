import Indicateur from "../indicateur";
import { getMasseMolaire } from "../../utils/molecules.utils";

export class EconomieAtomesIndicateur extends Indicateur {
  constructor() {
    super("Économie d'atomes", "EA");
  }

  reactionPrincipale(reaction) {
    /*
        D59/D10
        D59 = Masse molaire produit
        D10 = Masse molaire reactifs
        */
    const masseMolaireReactifs =
      this.reactionService.masseMolaireReactifs(reaction);
    const masseMolaireProduit =  getMasseMolaire( reaction.produit );
    return masseMolaireProduit / masseMolaireReactifs;
  }

  reactionComplete(reaction) {
    return null;
  }
}

export default EconomieAtomesIndicateur;
