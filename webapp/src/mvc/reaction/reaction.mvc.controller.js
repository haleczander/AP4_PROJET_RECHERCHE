export default class ReactionMVCController {

    views = [];

    constructor( reactionComplete ) {
        this.reactionComplete = reactionComplete;
    }

    addView( view ) {
        this.views.push( view );
    }

    updateViews() {
        this.views.forEach( view => {
            view.reactionComplete( this.reactionComplete );
        } );
    }

    updateSousProduits( sousProduits ) {
        this.views.forEach( view => {
            view.sousProduits( sousProduits );
        } );
    }

    updateCoef( molecule, stoechimetrie, liste ) {
        molecule.coefStoechiometrique += stoechimetrie;
        
        if ( molecule.coefStoechiometrique <= 0 ) {
            const index = liste.indexOf( molecule );
            if ( index > -1 ) {
                liste.splice( index, 1 );
            }
        }
        this.updateViews();
    }

    removeElement( element, elements ) {
        const index = elements.indexOf( element );
        if ( index > -1 ) {
            elements.splice( index, 1 );
        }
        this.updateViews();
    }

    updateProduit( produit, stoechimetrie ) {
        produit.coefStoechiometrique += stoechimetrie;
        if ( produit.coefStoechiometrique <= 0 ){
            this.reactionComplete.produit = null;
        }
        this.updateViews();
    }

}