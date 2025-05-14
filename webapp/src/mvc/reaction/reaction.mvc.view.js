export default class ReactionMVCView {

    constructor(controller) {
        this.controller = controller;
        this.clickableZones = [];
    }

    reactionComplete(reactionComplete) {
        this.reactionPrincipale(reactionComplete.reactionPrincipale);
        this.postTraitement(reactionComplete.traitementPostReactionnel);
        this.purification(reactionComplete.purification);
        this.produit(reactionComplete.produit);
    }

    reactionPrincipale(reactionPrincipale) {
        this.rpReactifs(reactionPrincipale.reactifs);
        this.rpSolvants(reactionPrincipale.solvants);
        this.rpCatalyseurs(reactionPrincipale.catalyseurs);
        this.rpActivations(reactionPrincipale.activations);
    }

    rpReactifs(reactifs) {
    }

    rpSolvants(solvants) {
    }

    rpCatalyseurs(catalyseurs) {
    }

    rpActivations(activations) {
    }

    postTraitement(traitementPostReactionnel) {
        this.ptReactifs(traitementPostReactionnel.reactifs);
        this.ptActivations(traitementPostReactionnel.activations);
    }

    ptReactifs(reactifs) {
    }

    ptActivations(activations) {
    }

    purification(purification) {
        this.purifReactifs(purification.reactifs);
        this.purifActivations(purification.activations);
    }

    purifReactifs(reactifs) {
    }

    purifActivations(activations) {
    }

    produit(produit) {
    }

    sousProduits(residu) {
    }

}
