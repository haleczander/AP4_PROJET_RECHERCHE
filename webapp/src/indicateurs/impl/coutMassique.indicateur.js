import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";

export class CoutMassiqueIndicateur extends Indicateur {
    
    constructor() {
        super( "Cout massique du produit", "€/g" );
        this.reactionService = new ReactionService();
    }

    // Cout de la réaction / masse du produit

    reactionPrincipale( reaction ){
        const cout = this.reactionService.prixReactionPrincipale( reaction, true )
        const masseProduit = reaction.produit.masseG;
        return cout / masseProduit;
    };

    reactionComplete( reaction ){
        const cout = this.reactionService.prixReactionComplete( reaction, true );
        const masseProduit = reaction.produit.masseG;
        return cout / masseProduit;
    };
}

export default CoutMassiqueIndicateur;