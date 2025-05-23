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
  reactionPrincipale;
  traitementPostReactionnel;
  purification;
  produit;
  sousProduits;

  constructor() {
    this.reactionPrincipale = new ReactionPrincipale();
    this.traitementPostReactionnel = new TraitementPostReactionnel();
    this.purification = new Purification();
    
  }
}
