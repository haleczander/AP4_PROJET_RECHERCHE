import Molecule from "./molecule.model";

export class MoleculeReaction extends Molecule {
  coefStoechiometrique = 1;
  recyclabilite = 0;
  purete = 0;
  volume = 0;
  prixG = 0;
}

export default MoleculeReaction;
