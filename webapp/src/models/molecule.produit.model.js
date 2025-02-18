import MoleculeReaction from "./molecule.reaction.model";

export class Produit extends MoleculeReaction {
    prixCommercialG = 0;
    masseG = 0;

    constructor() {
        super();
    }
}

export default Produit;