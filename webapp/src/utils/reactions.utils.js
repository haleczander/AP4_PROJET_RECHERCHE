import { getEnergieKWh } from "./activations.utils";
import {
  getCoefCMR,
  getCoefDanger,
  getCoefToxicite,
  getMasseG,
  getMassePureteG,
  getPrixEuro,
} from "./molecules.utils";
import _ from "lodash";

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

export function getSumEnergieKWh(activations) {
  return getSum(activations, getEnergieKWh);
}

export function getSumMasseRecyclee(molecules) {
  return getSum(
    molecules,
    (molecule) => molecule.recyclabilite * getMasseG(molecule),
  );
}

export function moleculeExists(molecule, molecules) {
  const existing = _.find(molecules, (item) =>
    _.isEqual(_.omit(item, ['volume']), _.omit(molecule, ['volume']))
  );
  return existing;
}
