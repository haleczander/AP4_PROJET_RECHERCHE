import Indicateur from "../indicateur";

export class CoefCMRIndicateur extends Indicateur {
  constructor() {
    super("Coefficient CMR", "CMR");
  }

  reactionPrincipale(reaction) {
    /*
        H26
        H26 = Somme coef CMR reaction principale / masse reaction principale
        */
    const masseReactionPrincipale =
      this.reactionService.masseReactionPrincipale(reaction);

    const coefCMRReactifs = this.reactionService.coefCMRReactifs(reaction);
    const coefCMRCatalyseurs =
      this.reactionService.coefCMRCatalyseurs(reaction);
    const coefCMRSolvants = this.reactionService.coefCMRSolvants(reaction);

    return (
      (coefCMRReactifs + coefCMRSolvants + coefCMRCatalyseurs) /
      masseReactionPrincipale
    );
  }

  reactionComplete(reaction) {
    const masseReactionComplete =
      this.reactionService.masseReactionComplete(reaction);

    const coefCMRReactifs = this.reactionService.coefCMRReactifs(reaction);
    const coefCMRCatalyseurs =
      this.reactionService.coefCMRCatalyseurs(reaction);
    const coefCMRSolvants = this.reactionService.coefCMRSolvants(reaction);
    const coefCMRPostTraitement =
      this.reactionService.coefCMRPostTraitement(reaction);
    const coefCMRPurification =
      this.reactionService.coefCMRPurification(reaction);

    const sumCoefCMR =
      coefCMRReactifs +
      coefCMRSolvants +
      coefCMRCatalyseurs +
      coefCMRPostTraitement +
      coefCMRPurification;

    return sumCoefCMR / masseReactionComplete;
  }
}

export default CoefCMRIndicateur;
