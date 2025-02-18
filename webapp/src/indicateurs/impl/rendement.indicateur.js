import ReactionService from "../../services/reaction.service";
import { getNParMmol } from "../../utils/molecules.utils";
import Indicateur from "../indicateur";

export class RendementIndicateur extends Indicateur {
    
    constructor() {
        super( "Rendement", "ρ" );
        this.reactionService = new ReactionService();
    }


    reactionPrincipale( reaction ){
        /*
        E61 /100
        E61 = 100000*D61/(MIN(I6:I9))
        D61 = n/mol produit
        MIN(I6:I9) = min n/mol reactifs
        */
       const nMolReactifs = this.reactionService.reactifs( reaction ).map( getNParMmol );
       console.log( "nMolReactifs", nMolReactifs );
       const nMolMinReactifs = Math.min( nMolReactifs );
       console.log( "nMolMinReactifs", nMolMinReactifs );
       const nMolProduit = getNParMmol( reaction.produit );
         console.log( "nMolProduit", nMolProduit );
       const nMolRatio = nMolProduit / nMolMinReactifs;
         console.log( "nMolRatio", nMolRatio );
       return nMolRatio * 1000;
    };

    reactionComplete( reaction ){
        return null;
    };
}

export default RendementIndicateur;