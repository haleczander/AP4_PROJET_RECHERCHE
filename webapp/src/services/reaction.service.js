import { getCoefDanger, getCoefToxicite, getMasseG, getMassePureteG, getMasseRecycleeG, getMasseRecycleePureteG } from "../utils/molecules.utils";
import { getSum, getSumMasseG, getSumMassePureteG } from "../utils/reactions.utils";

export default class ReactionService {
    constructor() {}

    reactifs( reaction ) {
        return reaction.reactionPrincipale.reactifs;
    }

    masseReactifs( reaction ) {
        return getSum( this.reactifs( reaction ), getMasseG );
    }

    masseMolaireReactifs( reaction ) {
        return getSum( this.reactifs( reaction ), reactif => reactif.masseMolaire );
    }

    nbCarboneReactifs( reaction ) {
        return getSum( this.reactifs( reaction ), reactif => reactif.nbCarbone );
    }

    coefDangerReactifs( reaction ) {
        return getSum( this.reactifs( reaction ), getCoefDanger );
    }

    coefToxiciteReactifs( reaction ) {
        return getSum( this.reactifs( reaction ), getCoefToxicite );
    }

    solvants( reaction ) {
        return reaction.reactionPrincipale.solvants;
    }

    masseSolvants( reaction ) {
        return getSum( this.solvants( reaction ), getMassePureteG );
    }

    coefDangerSolvants( reaction ) {
        return getSum( this.solvants( reaction ), solvant => getCoefDanger(solvant, true) );
    }

    coefToxiciteSolvants( reaction ) {
        return getSum( this.solvants( reaction ), molecule => getCoefToxicite(molecule, true) );
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

    coefDangerCatalyseurs( reaction ) {
        return getSum( this.catalyseurs( reaction ), getCoefDanger );
    }

    coefToxiciteCatalyseurs( reaction ) {
        return getSum( this.catalyseurs( reaction ), getCoefToxicite );
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

    coefDangerPostTraitement( reaction ) {
        return getSum( this.postTraitement( reaction ), molecule => getCoefDanger(molecule, true) );
    }

    coefToxicitePostTraitement( reaction ) {
        return getSum( this.postTraitement( reaction ), molecule => getCoefToxicite(molecule, true) );
    }

    massePostTraitementRecyclable( reaction ) {
        return getSum( this.postTraitement( reaction ), getMasseRecycleePureteG );
    }

    purification( reaction ) {
        return reaction.purification.reactifs;
    }

    coefDangerPurification( reaction ) {
        const erreurPurification = true; // ERREUR dans l'excel 
        return getSum( this.purification( reaction ), molecule => getCoefDanger(molecule, true, erreurPurification) );
    }

    coefToxicitePurification( reaction ) {
        return getSum( this.purification( reaction ), molecule => getCoefToxicite(molecule, true) );
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

    moleculesReactionPrincipale( reaction ) {
        return [
            ...this.reactifs( reaction ),
            ...this.solvants( reaction ),
            ...this.catalyseurs( reaction )
        ];
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