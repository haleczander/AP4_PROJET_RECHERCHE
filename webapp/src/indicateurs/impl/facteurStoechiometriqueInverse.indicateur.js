import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";
import FacteurStoechiometriqueIndicateur from "./facteurStoechiometrique.indicateur";

export class FacteurStoechiometriqueInverseIndicateur extends Indicateur{

    constructor() {
        super( "Facteur stoechiométrique Inverse", "1/FSt")
        this.reactionService = new ReactionService();
        this.indicateurFSt = new FacteurStoechiometriqueIndicateur()
    }

    reactionPrincipale( reaction ){
        const FSt = this.indicateurFSt.reactionPrincipale( reaction );
        return 1 / FSt;
    };

    reactionComplete( reaction ){
        return null;
    };
}

export default FacteurStoechiometriqueInverseIndicateur;