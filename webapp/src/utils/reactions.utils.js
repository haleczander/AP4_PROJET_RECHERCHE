import { getEnergieKWh } from "./activations.utils";
import {
  getCoefCMR,
  getCoefDanger,
  getCoefToxicite,
  getMasseG,
  getMassePureteG,
  getPrixEuro,
} from "./molecules.utils";

export function getSum(elements, fn) {
  return elements.reduce((sum, element) => sum + fn(element), 0);
}

export function getSumCoefDanger(molecules) {
  return getSum(molecules, getCoefDanger);
}

export function getSumCoefToxicite(molecules) {
  return getSum(molecules, getCoefToxicite);
}

export function getSumCoefCMR(molecules) {
  return getSum(molecules, getCoefCMR);
}

export function getSumMasseG(molecules) {
  return getSum(molecules, getMasseG);
}

export function getSumMassePureteG(molecules) {
  return getSum(molecules, getMassePureteG);
}

export function getSumPrixEuro(molecules) {
  return getSum(molecules, getPrixEuro);
}

export function getSumMasseMolaire(molecules) {
  return getSum(molecules, (molecule) => molecule.masseMolaire);
}

export function getSumEnergieKWh(activations) {
  return getSum(activations, getEnergieKWh);
}

export function getSumMasseRecyclee(molecules) {
  return getSum(
    molecules,
    (molecule) => molecule.recyclabilite * getMasseG(molecule),
  );
}
