import CoefCMRIndicateur from "./indicateurs/impl/coefCMR.indicateur";
import CoefDangerIndicateur from "./indicateurs/impl/coefDanger.indicateur";
import CoefToxiciteIndicateur from "./indicateurs/impl/coefToxicite.indicateur";
import CoutMassiqueIndicateur from "./indicateurs/impl/coutMassique.indicateur";
import EconomieAtomesIndicateur from "./indicateurs/impl/economieAtomes.indicateur";
import EconomieCarboneIndicateur from "./indicateurs/impl/economieCarbone.indicateur";
import EfficaciteMassiqueReactionIndicateur from "./indicateurs/impl/efficaciteMassique.indicateur";
import FacteurEnvironnementalMassiqueIndicateur from "./indicateurs/impl/facteurEnvMassique.indicateur";
import FacteurEnvironnementalMolaireIndicateur from "./indicateurs/impl/facteurEnvMolaire.indicateur";
import FacteurStoechiometriqueIndicateur from "./indicateurs/impl/facteurStoechiometrique.indicateur";
import FacteurStoechiometriqueInverseIndicateur from "./indicateurs/impl/facteurStoechiometriqueInverse.indicateur";
import MasseDechetsIndicateur from "./indicateurs/impl/masseDechets.indicateur";
import PRMmIndicateur from "./indicateurs/impl/PRMm.indicateur";
import RatioNreactifsMinSurMaxIndicateur from "./indicateurs/impl/ratioReactifMinReactifMax.indicateur";
import RendementIndicateur from "./indicateurs/impl/rendement.indicateur";

// Indicateurs utilisés pour effectuer les calculs
export const INDICATEURS = [
  MasseDechetsIndicateur,
  CoutMassiqueIndicateur,
  FacteurEnvironnementalMolaireIndicateur,
  FacteurEnvironnementalMassiqueIndicateur,
  FacteurStoechiometriqueIndicateur,
  FacteurStoechiometriqueInverseIndicateur,
  RatioNreactifsMinSurMaxIndicateur,
  CoefCMRIndicateur,
  EconomieCarboneIndicateur,
  EconomieAtomesIndicateur,
  RendementIndicateur,
  EfficaciteMassiqueReactionIndicateur,
  PRMmIndicateur,
  CoefDangerIndicateur,
  CoefToxiciteIndicateur,
];

export const BILAN_INDICATEURS = [
  EconomieCarboneIndicateur,
  EconomieAtomesIndicateur,
  RendementIndicateur,
  EfficaciteMassiqueReactionIndicateur,
  PRMmIndicateur,
  CoefDangerIndicateur,
  CoefToxiciteIndicateur,
];

export const RADAR_STYLES = {
  backgroundColor: "rgba(255,99,132,0.2)",
  borderColor: "rgba(255,99,132,1)",
  pointBackgroundColor: "rgba(255,99,132,1)",
  pointBorderColor: "#fff",
  fill: true,
}

