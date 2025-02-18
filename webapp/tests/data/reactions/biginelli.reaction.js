import { Purification, ReactionComplete, ReactionPrincipale, TraitementPostReactionnel } from "../../../src/models/reaction.model";
import { createActivationReaction } from "../../../src/utils/activations.utils";
import { createMoleculeReaction, createProduit, getMasseG } from "../../../src/utils/molecules.utils";
import { ACETOACETATE_ETHYLE, ACIDE_CHLORHYDRIQUE, BENZALDEHYDE, EAU, ETHANOL, PRODUIT_BIGINELLI, UREE } from "../../data/molecules.data";
import { ETUVE, PLAQUE_CHAUFFANTE } from "../activations.data";

export default createReaction();

function createReaction() {
    const reaction = new ReactionComplete();
    reaction.reactionPrincipale = reactionPrincipale();
    reaction.traitementPostReactionnel = traitementPostReactionnel();
    reaction.purification = purification();
    reaction.produit = produit();
    return reaction;
}

function reactionPrincipale() {
    const reactionPrincipale = new ReactionPrincipale();

    const reactif1 = createMoleculeReaction( ACETOACETATE_ETHYLE );
    reactif1.purete = 99;
    reactif1.volume = 2.4;
    reactif1.prixG = .016;

    const reactif2 = createMoleculeReaction( UREE );
    reactif2.densite = 1;
    reactif2.purete = 99;
    reactif2.volume = .75;
    reactif2.prixG = .035;

    const reactif3 = createMoleculeReaction( BENZALDEHYDE );
    reactif3.purete = 99;
    reactif3.volume = 1.3;
    reactif3.prixG = .035;

    reactionPrincipale.reactifs = [ reactif1, reactif2, reactif3 ];

    const activation = createActivationReaction( PLAQUE_CHAUFFANTE );
    activation.dureeM = 90;
    activation.puissance = 800;

    reactionPrincipale.activations = [ activation ];

    const catalyseur = createMoleculeReaction( ACIDE_CHLORHYDRIQUE );
    catalyseur.purete = 35;
    catalyseur.volume = .5;
    catalyseur.prixG = .015;
    catalyseur.recyclabilite = 0;

    reactionPrincipale.catalyseurs = [ catalyseur ];

    const solvant1 = createMoleculeReaction( ETHANOL );
    solvant1.densite = .79;
    solvant1.purete = 95;
    solvant1.volume = 4.75;
    solvant1.prixG = .015;
    solvant1.recyclabilite = 0;

    const solvant2 = createActivationReaction( EAU );
    solvant2.densite = 1;
    solvant2.purete = 5;
    solvant2.volume = .25;
    solvant2.prixG = 0;
    solvant2.recyclabilite = 0;
    console.log(.01*solvant1.densite*solvant1.purete*solvant1.volume, .01*solvant2.densite*solvant2.purete*solvant2.volume)
    console.log( getMasseG( solvant1), getMasseG(solvant2))


    reactionPrincipale.solvants = [ solvant1, solvant2 ];

    return reactionPrincipale;
}

function traitementPostReactionnel(){
    const traitementPostReactionnel = new TraitementPostReactionnel();
    return traitementPostReactionnel;
}

function purification(){
    const purification = new Purification();

    const reactif1 = createMoleculeReaction( ETHANOL );
    reactif1.purete = 100;
    reactif1.volume = 4.75;
    reactif1.prixG = .015;
    reactif1.recyclabilite = 0;

    const reactif2 = createActivationReaction( EAU );
    reactif2.purete = 100;
    reactif2.volume = .25;
    reactif2.prixG = 0;
    reactif2.recyclabilite = 0;

    purification.reactifs = [ reactif1, reactif2 ];

    const activation1 = createActivationReaction( PLAQUE_CHAUFFANTE );
    activation1.dureeM = 15;
    activation1.puissance = 800;

    const activation2 = createActivationReaction( ETUVE );
    activation2.dureeM = 45;
    activation2.puissance = 2000;

    purification.activations = [ activation1, activation2 ];

    return purification;
}

function produit() {
    const produit = createProduit( PRODUIT_BIGINELLI );
    produit.purete = 99;
    produit.masseG = 2.5;
    produit.prixCommercialG = 100;
    return produit;
}

