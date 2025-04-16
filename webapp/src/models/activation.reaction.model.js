import Activation from "./activation.model";

export class ActivationReaction extends Activation {
  dureeM = 0;
  puissanceW = 0;
  energie;

  constructor(id = null, nom = null) {
    super(id, nom);
  }

  setEnergie(energie) {
    this.energie = energie;
  }
}
