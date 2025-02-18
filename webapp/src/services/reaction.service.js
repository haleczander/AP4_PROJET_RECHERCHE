import { getMasseG, getMassePureteG, getMasseRecycleeG, getMasseRecycleePureteG } from "../utils/molecules.utils";
import { getSum, getSumMasseG, getSumMassePureteG } from "../utils/reactions.utils";

export default class ReactionService {
    constructor() {}

    reactifs( reaction ) {
        return reaction.reactionPrincipale.reactifs;
    }

    masseReactifs( reaction ) {
        return getSum( this.reactifs( reaction ), getMasseG );
    }

    solvants( reaction ) {
        return reaction.reactionPrincipale.solvants;
    }

    masseSolvants( reaction ) {
        return getSum( this.solvants( reaction ), getMassePureteG );
    }

    masseSolvantsRecyclable( reaction ) {
        return getSum( this.solvants( reaction ), getMasseRecycleePureteG)
    }

    catalyseurs( reaction ) {
        return reaction.reactionPrincipale.catalyseurs;
    }

    masseCatalyseurs( reaction ) {
        return getSum( this.catalyseurs( reaction ), getMasseG );
    }

    masseCatalyseursRecyclable( reaction ) {
        return getSum( this.catalyseurs( reaction ), getMasseRecycleeG );
    }

    postTraitement( reaction ) {
        return reaction.traitementPostReactionnel.reactifs;
    }

    massePostTraitement( reaction ) {
        return getSum( this.postTraitement( reaction ), getMassePureteG );
    }

    massePostTraitementRecyclable( reaction ) {
        return getSum( this.postTraitement( reaction ), getMasseRecycleePureteG );
    }

    purification( reaction ) {
        return reaction.purification.reactifs;
    }

    massePurification( reaction ) {
        return getSum( this.purification( reaction ), getMassePureteG );
    }

    massePurificationRecyclable( reaction ) {
        return getSum( this.purification( reaction ), getMasseRecycleePureteG );
    }

    masseRecyclableReactionPrincipale( reaction ) {
        return this.masseSolvantsRecyclable( reaction ) 
            + this.masseCatalyseursRecyclable( reaction );
    }

    masseRecyclable( reaction ) {
        return this.masseRecyclableReactionPrincipale( reaction )
            + this.massePostTraitementRecyclable( reaction )
            + this.massePurificationRecyclable( reaction );
    }

    masseReactionPrincipale( reaction ) {
        return this.masseReactifs( reaction ) 
            + this.masseSolvants( reaction ) 
            + this.masseCatalyseurs( reaction );
    }

    masseReactionComplete( reaction ) {
        return this.masseReactionPrincipale( reaction ) 
            + this.massePostTraitement( reaction ) 
            + this.massePurification( reaction );
    }

    
    nMolProduit( reaction ) {
        const produit = reaction.produit;
        const purete = produit.purete / 100;
        const massePure = purete * produit.masseG;
        return massePure / produit.masseMolaire;
    }
}