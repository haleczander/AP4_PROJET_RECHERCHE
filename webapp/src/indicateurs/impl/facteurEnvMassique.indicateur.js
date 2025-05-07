import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";
import MasseDechetsIndicateur from "./masseDechets.indicateur";

export class FacteurEnvironnementalMassiqueIndicateur extends Indicateur {
  constructor() {
    super("Facteur Environnemental Massique", "Em");
    this.indicateurMasseDechets = new MasseDechetsIndicateur();
  }
  // masse déchets / masse produit

  reactionPrincipale(reaction) {
    const masseProduit = reaction.produit.masseG;
    const masseDechets =
      this.indicateurMasseDechets.reactionPrincipale(reaction);

    return masseDechets / masseProduit;
  }

  reactionComplete(reaction) {
    const masseProduit = reaction.produit.masseG;
    const masseDechets = this.indicateurMasseDechets.reactionComplete(reaction);

    return masseDechets / masseProduit;
  }
}

export default FacteurEnvironnementalMassiqueIndicateur;
