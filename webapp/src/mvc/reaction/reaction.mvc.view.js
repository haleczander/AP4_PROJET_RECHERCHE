export default class ReactionMVCView {

    constructor( controller ) {
        this.controller = controller;
    }

    reactionComplete( reactionComplete ) {
        this.reactionPrincipale( reactionComplete.reactionPrincipale );
        this.postTraitement( reactionComplete.traitementPostReactionnel );
        this.purification( reactionComplete.purification );
        this.produit( reactionComplete.produit );
    }

    reactionPrincipale( reactionPrincipale ) {
        this.rpReactifs( reactionPrincipale.reactifs );
        this.rpSolvants( reactionPrincipale.solvants );
        this.rpCatalyseurs( reactionPrincipale.catalyseurs );
        this.rpActivations( reactionPrincipale.activations );
    }

    rpReactifs( reactifs ) {
        throw new Error( "Not implemented" );
    }

    rpSolvants( solvants ) {
        throw new Error( "Not implemented" );
    }

    rpCatalyseurs( catalyseurs ) {
        throw new Error( "Not implemented" );
    }

    rpActivations( activations ) {
        throw new Error( "Not implemented" );
    }

    postTraitement( traitementPostReactionnel ) {
        this.ptReactifs( traitementPostReactionnel.reactifs );
        this.ptActivations( traitementPostReactionnel.activations );
    }

    ptReactifs( reactifs ) {
        throw new Error( "Not implemented" );
    }

    ptActivations( activations ) {
        throw new Error( "Not implemented" );
    }

    purification( purification ) {
        this.purifReactifs( purification.reactifs );
        this.purifActivations( purification.activations );
    }

    purifReactifs( reactifs ) {
        throw new Error( "Not implemented" );
    }

    purifActivations( activations ) {
        throw new Error( "Not implemented" );
    }

    produit( produit ) {
        throw new Error( "Not implemented" );
    }

    sousProduits( residu ) {
        throw new Error( "Not implemented" );
    }

}
