import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";
import FacteurEnvironnementalMassiqueIndicateur from "./facteurEnvMassique.indicateur";

export class EfficaciteMassiqueReactionIndicateur extends Indicateur{

    constructor() {
        super( "Efficacité Massique de la Réaction", "EMR")
        this.reactionService = new ReactionService();
        this.indicateurEm = new FacteurEnvironnementalMassiqueIndicateur();
    }

    // 1 / ( 1 + Facteur environnemental Massique )
    reactionPrincipale( reaction ){
        const Em = this.indicateurEm.reactionPrincipale( reaction );
        return 1 / ( 1 + Em );
    };

    reactionComplete( reaction ){
        const Em = this.indicateurEm.reactionComplete( reaction );
        return 1 / ( 1 + Em );
    };
}

export default EfficaciteMassiqueReactionIndicateur;