import Indicateur from "../indicateur";

export class FacteurEnvironnementalMolaireIndicateur extends Indicateur {
  constructor() {
    super("Facteur Environnemental Molaire", "EM");

  }

  reactionPrincipale(reaction) {
    /*
        =(D10-D59)/D59
        D59 = Masse molaire produit
        D10 = Masse molaire reactifs
        */
    const masseMolaireReactifs =
      this.reactionService.masseMolaireReactifs(reaction);
    const masseMolaireProduit = reaction.produit.masseMolaire;

    return (masseMolaireReactifs - masseMolaireProduit) / masseMolaireProduit;
  }

  reactionComplete(reaction) {
    return null;
  }
}

export default FacteurEnvironnementalMolaireIndicateur;
