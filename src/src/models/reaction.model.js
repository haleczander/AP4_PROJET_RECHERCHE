export class BaseReaction {
    reactifs = [];
    activations = [];
}

export class ReactionPrincipale extends BaseReaction {
    catalyseurs = [];
    solvants = [];
}

export const TraitementPostReactionnel = BaseReaction;
export const Purification = BaseReaction;

export class ReactionComplete {
    matieresPremieres;
    traitementPostReactionnel;
    purification;
    produit;
    sousProduits;

    constructor() {
    }

}