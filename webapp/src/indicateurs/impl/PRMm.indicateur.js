import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";

export class PRMmndicateur extends Indicateur {

    constructor() {
        super( "PRMm", "PRMm" );
        this.reactionService = new ReactionService();
    }


    reactionPrincipale( reaction ){
        /*
        I26/(D26-J10)
        I26 = masse recyclee reaction principale
        D26 = somme masse g reaction principale
        J10 = somme masse g reactifs
        D26 - J10 = masse solvants + masse catalyseurs
        */
        const masseSolvants = this.reactionService.masseSolvants( reaction );
        const masseCatalyseurs = this.reactionService.masseCatalyseurs( reaction );
        const masseRecycleeReactionPrincipale = this.reactionService.masseRecyclableReactionPrincipale( reaction );
        return masseRecycleeReactionPrincipale / ( masseSolvants + masseCatalyseurs );
    };

    reactionComplete( reaction ){
        /*
        F55/(D55-J10)
        F55 = masse recyclee reaction complete
        D55 = somme masse g reaction complete
        J10 = somme masse g reactifs
        */
        const masseReactionComplete = this.reactionService.masseReactionComplete( reaction );
        const masseReactifs = this.reactionService.masseReactifs( reaction );
        const masseRecycleeReactionComplete = this.reactionService.masseRecyclable( reaction );
        return masseRecycleeReactionComplete / ( masseReactionComplete - masseReactifs );
    };
}

export default PRMmndicateur;