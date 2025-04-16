import ReactionService from "../../services/reaction.service";
import {
  getCoefDanger,
  getDanger,
  getMassePureteG,
} from "../../utils/molecules.utils";
import Indicateur from "../indicateur";

export class CoefToxiciteIndicateur extends Indicateur {
  constructor() {
    super("Coefficient de Toxicité", "Tox");
    this.reactionService = new ReactionService();
  }

  reactionPrincipale(reaction) {
    /*
        G26
        G26=(AB23+AC18+AC10)/D26
        D26 = masse reaction principale
        AC10 = somme coef tox reactifs
        AC18 = somme coef tox catalyseurs
        AB23 = somme coef tox solvants
        */
    const masseReactionPrincipale =
      this.reactionService.masseReactionPrincipale(reaction);

    const coefToxiciteReactifs =
      this.reactionService.coefToxiciteReactifs(reaction);
    const coefToxiciteCatalyseurs =
      this.reactionService.coefToxiciteCatalyseurs(reaction);
    const coefToxiciteSolvants =
      this.reactionService.coefToxiciteSolvants(reaction);

    return (
      (coefToxiciteReactifs + coefToxiciteSolvants + coefToxiciteCatalyseurs) /
      masseReactionPrincipale
    );
  }

  reactionComplete(reaction) {
    /*
        G55
        G55 = (AA45+AA33+AA23+AB18+AB10)/D55
        D55 = masse reaction complete
        AB10 = somme coef danger reactifs
        AB18 = somme coef danger catalyseurs
        AA23 = somme coef danger solvants
        AA33 = somme coef danger post traitement
        AA45 = somme coef danger purification
        */
    const masseReactionComplete =
      this.reactionService.masseReactionComplete(reaction);

    const coefToxiciteReactifs =
      this.reactionService.coefToxiciteReactifs(reaction);
    const coefToxiciteCatalyseurs =
      this.reactionService.coefToxiciteCatalyseurs(reaction);
    const coefToxiciteSolvants =
      this.reactionService.coefToxiciteSolvants(reaction);
    const coefToxicitePostTraitement =
      this.reactionService.coefToxicitePostTraitement(reaction);
    const coefToxicitePurification =
      this.reactionService.coefToxicitePurification(reaction);

    const sumCoefToxicite =
      coefToxiciteReactifs +
      coefToxiciteSolvants +
      coefToxiciteCatalyseurs +
      coefToxicitePostTraitement +
      coefToxicitePurification;

    return sumCoefToxicite / masseReactionComplete;
  }
}

export default CoefToxiciteIndicateur;
