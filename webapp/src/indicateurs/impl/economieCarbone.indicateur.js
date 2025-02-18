import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";

export class EconomieAtomesIndicateur extends Indicateur {
    
    constructor() {
        super( "Économie de Carbone", "EC" );
        this.reactionService = new ReactionService();
    }


    reactionPrincipale( reaction ){
        /*
        I59/SOMME(E6:E9)
        I59 = nbCarbone Produit
        SOMME(E6:E9) = somme nbCarbone Reactifs
        */
        const nbCarboneReactifs = this.reactionService.nbCarboneReactifs( reaction );
        const nbcarboneProduit = reaction.produit.nbCarbone;
        return nbcarboneProduit / nbCarboneReactifs
    };

    reactionComplete( reaction ){
        return null;
    };
}

export default EconomieAtomesIndicateur;