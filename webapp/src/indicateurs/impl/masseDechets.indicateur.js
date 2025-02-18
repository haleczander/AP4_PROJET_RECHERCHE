import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";

export class MasseDechetsIndicateur extends Indicateur {
    reactionService;

    constructor(){
        super( "Masse des déchets", "masseDechets" );
        this.reactionService = new ReactionService();
    }

    reactionPrincipale( reaction ){
        /*
        J10-F59
        J10 = Somme masse reactifs
        F59 = masse produit
        */
        const masseReactifs = this.reactionService.masseReactifs( reaction );
        const masseProduit = reaction.produit.masseG;
        return masseReactifs - masseProduit;
    };

    reactionComplete( reaction ){
        /*
        D55-F59-F55
        D55 = masse totale de reaction
        F59 = masse produit
        F55 = masse recyclable
        */
        const masseReactionComplete = this.reactionService.masseReactionComplete( reaction );
        const masseRecyclable = this.reactionService.masseRecyclable( reaction );
        
        const masseProduit = reaction.produit.masseG;
        console.log( masseReactionComplete, masseProduit, masseRecyclable)
        return masseReactionComplete - masseProduit - masseRecyclable;
    };


}

export default MasseDechetsIndicateur;