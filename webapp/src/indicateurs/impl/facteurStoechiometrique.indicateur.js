import Indicateur from "../indicateur";
import EconomieAtomesIndicateur from "./economieAtomes.indicateur";
import EfficaciteMassiqueReactionIndicateur from "./efficaciteMassique.indicateur";
import RendementIndicateur from "./rendement.indicateur";

export class FacteurStoechiometriqueIndicateur extends Indicateur {
  constructor( nom="Facteur stoechiométrique", code="FSt") {
    super(nom, code);

    this.indicateurEconomieAtomes = new EconomieAtomesIndicateur();
    this.indicateurRendement = new RendementIndicateur();
    this.indicateurEmr = new EfficaciteMassiqueReactionIndicateur();
  }
  // (Economie Atomes * Rendement / EMR)

  reactionPrincipale(reaction) {
    const EA = this.indicateurEconomieAtomes.reactionPrincipale(reaction);
    const rho = this.indicateurRendement.reactionPrincipale(reaction);
    const EMR = this.indicateurEmr.reactionPrincipale(reaction);

    return (EA * rho) / EMR;
  }

  reactionComplete(reaction) {
    const EA = this.indicateurEconomieAtomes.reactionPrincipale(reaction);
    const rho = this.indicateurRendement.reactionPrincipale(reaction);
    const EMR = this.indicateurEmr.reactionComplete(reaction);

    return (EA * rho) / EMR;
  }
}

export default FacteurStoechiometriqueIndicateur;
