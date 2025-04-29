import {
  CoefCMRIndicateur,
  CoefDangerIndicateur,
  CoefToxiciteIndicateur,
  CoutMassiqueIndicateur,
  EconomieAtomesIndicateur,
  EconomieCarboneIndicateur,
  EfficaciteMassiqueReactionIndicateur,
  FacteurEnvironnementalMassiqueIndicateur,
  FacteurEnvironnementalMolaireIndicateur,
  FacteurStoechiometriqueIndicateur,
  FacteurStoechiometriqueInverseIndicateur,
  MasseDechetsIndicateur,
  PRMmIndicateur,
  RatioNreactifsMinSurMaxIndicateur,
  RendementIndicateur
} from "./indicateurs";

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
  pointBorderColor: "#fff",
  pointBackgroundColor: "rgba(255,99,132,1)",
  pointBorderColor: "#fff",
  fill: true,
}

