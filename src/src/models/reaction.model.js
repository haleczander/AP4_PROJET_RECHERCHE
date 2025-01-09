class Reaction {
    reactifs = [];
    catalyseurs = [];
    activations = [];
    produits = [];

    constructor() {
    }

    addReactif( reactif ) {
        this.reactifs.push( reactif );
    }

    removeReactif( reactif ){ 
        this.reactifs = this.reactifs.filter( rreactif => rreactif != reactif );
    }
}