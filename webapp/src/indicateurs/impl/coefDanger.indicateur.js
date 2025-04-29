import {
  getCoefDanger,
  getDanger,
  getMassePureteG,
} from "../../utils/molecules.utils";
import Indicateur from "../indicateur";

export class CoefDangerIndicateur extends Indicateur {
  constructor() {
    super("Coefficient de Danger", "Danger");

  }

  reactionPrincipale(reaction) {
    /*
        F26
        F26=(AA23+AB18+AB10)/D26
        D26 = masse reaction principale
        AB10 = somme coef danger reactifs
        AB18 = somme coef danger catalyseurs
        AA23 = somme coef danger solvants
        */
    const masseReactionPrincipale =
      this.reactionService.masseReactionPrincipale(reaction);
    const coefDangerReactifs =
      this.reactionService.coefDangerReactifs(reaction);
    const coefDangerCatalyseurs =
      this.reactionService.coefDangerCatalyseurs(reaction);
    const coefDangerSolvants =
      this.reactionService.coefDangerSolvants(reaction);

    return (
      (coefDangerReactifs + coefDangerSolvants + coefDangerCatalyseurs) /
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

    const coefDangerReactifs =
      this.reactionService.coefDangerReactifs(reaction);
    const coefDangerCatalyseurs =
      this.reactionService.coefDangerCatalyseurs(reaction);
    const coefDangerSolvants =
      this.reactionService.coefDangerSolvants(reaction);
    const coefDangerPostTraitement =
      this.reactionService.coefDangerPostTraitement(reaction);
    const coefDangerPurification =
      this.reactionService.coefDangerPurification(reaction);
    const sumCoefDanger =
      coefDangerReactifs +
      coefDangerSolvants +
      coefDangerCatalyseurs +
      coefDangerPostTraitement +
      coefDangerPurification;

    return sumCoefDanger / masseReactionComplete;
  }
}

export default CoefDangerIndicateur;
