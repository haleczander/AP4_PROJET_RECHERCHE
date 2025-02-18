import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";

export class EconomieAtomesIndicateur extends Indicateur {
    
    constructor() {
        super( "Économie d'atomes", "EA" );
        this.reactionService = new ReactionService();
    }


    reactionPrincipale( reaction ){
        /*
        D59/D10
        D59 = Masse molaire produit
        D10 = Masse molaire reactifs
        */
        const masseMolaireReactifs = this.reactionService.masseMolaireReactifs( reaction );
        const masseMolaireProduit = reaction.produit.masseMolaire;
        return masseMolaireProduit / masseMolaireReactifs
    };

    reactionComplete( reaction ){
        return null;
    };
}

export default EconomieAtomesIndicateur;