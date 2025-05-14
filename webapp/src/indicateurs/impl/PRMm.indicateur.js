import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";

export class PRMmIndicateur extends Indicateur {
  constructor() {
    super("PRMm", "PRMm");
  }

  reactionPrincipale(reaction) {
    /*
        I26/(D26-J10)
        I26 = masse recyclee reaction principale
        D26 = somme masse g reaction principale
        J10 = somme masse g reactifs
        D26 - J10 = masse solvants + masse catalyseurs
        */
    const masseSolvants = this.reactionService.masseSolvants(reaction);
    const masseCatalyseurs = this.reactionService.masseCatalyseurs(reaction);
    const masseRecycleeReactionPrincipale = this.reactionService.masseRecyclableReactionPrincipale(reaction);
    if ( (masseCatalyseurs+ masseSolvants) == 0) {return 0;}
    return masseRecycleeReactionPrincipale / (masseSolvants + masseCatalyseurs);
  }

  reactionComplete(reaction) {
    /*
        F55/(D55-J10)
        F55 = masse recyclee reaction complete
        D55 = somme masse g reaction complete
        J10 = somme masse g reactifs
        */
    const masseReactionComplete = this.reactionService.masseReactionComplete(reaction);
    const masseReactifs = this.reactionService.masseReactifs(reaction);
    const masseRecycleeReactionComplete = this.reactionService.masseRecyclable(reaction);
    if ( (masseReactionComplete - masseReactifs) == 0 ) { return 0;}
    return (
      masseRecycleeReactionComplete / (masseReactionComplete - masseReactifs)
    );
  }
}

export default PRMmIndicateur;