import { getNParMmol } from "../../utils/molecules.utils";
import Indicateur from "../indicateur";

export class RendementIndicateur extends Indicateur {
    
    constructor() {
        super( "Rendement", "ρ" );
        reactionService = new ReactionService();
    }


    reactionPrincipale( reaction ){
        /*
        E61 /100
        E61 = 100000*D61/(MIN(I6:I9))
        D61 = n/mol produit
        MIN(I6:I9) = min n/mol reactifs
        */
       const nMolReactifs = this.reactionService.reactifs( reaction ).map( getNParMmol );
       const nMolMinReactifs = Math.min( nMolReactifs );
       const nMolProduit = getNParMmol( reaction.produit );
       const nMolRatio = nMolProduit / nMolMinReactifs;
       return nMolRatio * 1000;
    };

    reactionComplete( reaction ){
        return null;
    };
}

export default RendementIndicateur;