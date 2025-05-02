export default class ReactionMVCController {

    views = [];

    constructor( reactionComplete ) {
        this.reactionComplete = reactionComplete;
    }

    addView( view ) {
        this.views.push( view );
        view.reactionComplete( this.reactionComplete );
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

    updateStoechiometrie( molecule, stoechimetrie, liste ) {
        molecule.coefStoechiometrique += stoechimetrie;
        if ( molecule.coefStoechiometrique <= 0 ) {
            const index = liste.indexOf( molecule );
            if ( index > -1 ) {
                liste.splice( index, 1 );
            }
        }
        this.updateViews();
    }

}