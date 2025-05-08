import ReactionService from "../services/reaction.service";

export class Indicateur {
  nom = null;
  code = null;

  constructor(nom, code) {
    this.nom = nom;
    this.code = code;
    this.reactionService = new ReactionService();
  }

  reactionPrincipale(reaction) {
    throw new Error("La méthode n'est pas implémentée.");
  }

  reactionComplete(reaction) {
    throw new Error("La méthode n'est pas implémentée.");
  }
}

export default Indicateur;
