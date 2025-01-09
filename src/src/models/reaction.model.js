export class BaseReaction {
    reactifs = [];
    activations = [];
}

export class MatieresPremieres extends BaseReaction {
    catalyseurs = [];
    solvants = [];
}

export const TraitementPostReactionnel = BaseReaction;
export const Putification = BaseReaction;

export class Reaction {
    matieresPremieres;
    traitementPostReactionnel;
    purification;
    produit;
    sousProduits;

    constructor() {
    }

}