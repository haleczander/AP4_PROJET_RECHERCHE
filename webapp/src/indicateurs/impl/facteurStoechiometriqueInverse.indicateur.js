import FacteurStoechiometriqueIndicateur from "./facteurStoechiometrique.indicateur";

export class FacteurStoechiometriqueInverseIndicateur extends FacteurStoechiometriqueIndicateur {
  constructor() {
    super("Facteur stoechiométrique Inverse", "1/FSt");
  }

  reactionPrincipale(reaction) {
    return 1 / super.reactionPrincipale(reaction);
  }

  reactionComplete(reaction) {
    return null;
  }
}

export default FacteurStoechiometriqueInverseIndicateur;
