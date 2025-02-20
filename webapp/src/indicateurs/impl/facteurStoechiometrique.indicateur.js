import ReactionService from "../../services/reaction.service";
import Indicateur from "../indicateur";
import EconomieAtomesIndicateur from "./economieAtomes.indicateur";
import EfficaciteMassiqueReactionIndicateur from "./efficaciteMassique.indicateur";
import RendementIndicateur from "./rendement.indicateur";

export class FacteurStoechiometriqueIndicateur extends Indicateur{

    constructor() {
        super( "Facteur stoechiométrique", "FSt")
        this.reactionService = new ReactionService();
        this.indicateurEconomieAtomes = new EconomieAtomesIndicateur();
        this.indicateurRendement = new RendementIndicateur();
        this.indicateurEmr = new EfficaciteMassiqueReactionIndicateur();
    }
    // (Economie Atomes * Rendement / EMR)

    reactionPrincipale( reaction ){
        const EA = this.indicateurEconomieAtomes.reactionPrincipale( reaction );
        const ρ = this.indicateurRendement.reactionPrincipale( reaction );
        const EMR = this.indicateurEmr.reactionPrincipale( reaction );

        return ( EA * ρ ) / EMR;
    };

    reactionComplete( reaction ){
        const EA = this.indicateurEconomieAtomes.reactionPrincipale( reaction );
        const ρ = this.indicateurRendement.reactionPrincipale( reaction );
        const EMR = this.indicateurEmr.reactionComplete( reaction );

        return ( EA * ρ ) / EMR;
    };
}

export default FacteurStoechiometriqueIndicateur;