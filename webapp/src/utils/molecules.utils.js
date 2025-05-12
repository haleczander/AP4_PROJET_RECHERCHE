import Molecule from "../models/molecule.model";
import MoleculeReaction from "../models/molecule.reaction.model";
import Produit from "../models/molecule.produit.model";
import { REGEX_FORMULA_PARSER } from "../constants";
import TablePeriodiqueService from "../services/tablePeriodique.service";

function getCoef(molecule, indicateursFn, purete = false) {
  const masseG = purete ? getMassePureteG(molecule) : getMasseG(molecule);
  const indicateurs = indicateursFn(molecule);
  const danger = moyenneIndicateurs(indicateurs);

  return (1 - danger) * masseG;
}

function moyenneIndicateurs(indicateurs) {
  let somme = 0;
  let coefs = 0;
  for (let indicateur in indicateurs) {
    const { valeur, coef } = indicateurs[indicateur];
    somme += valeur * coef;
    coefs += coef;
  }

  return coefs == 0 ? 0 : somme / coefs;
}

export function getCoefDanger(
  molecule,
  purete = false,
  erreurPurification = false,
) {
  return (
    getMasseG(molecule, purete) * (1 - getDanger(molecule, erreurPurification))
  );
}
export function getCoefToxicite(molecule, purete = false) {
  return getCoef(molecule, getIndicateursToxicite, purete);
}
export function getCoefCMR(molecule, purete = false) {
  return getCoef(molecule, getIndicateursCMR, purete);
}

export function getDanger(molecule, erreurPurification = false) {
  const indicateurs = getIndicateursDanger(molecule);
  const ERREUR_EXCEL = erreurPurification ? 14 / 12 : 1;
  return ERREUR_EXCEL * moyenneIndicateurs(indicateurs);
}
export function getToxicite(molecule) {
  const indicateurs = getIndicateursToxicite(molecule);
  return moyenneIndicateurs(indicateurs);
}
export function getCMR(molecule) {
  const indicateurs = getIndicateursCMR(molecule);
  return moyenneIndicateurs(indicateurs);
}

export function getIndicateursDanger(molecule) {
  return {
    Xi: { valeur: molecule.irritant ? 1 : 0, coef: 1 },
    C: { valeur: molecule.corrosif ? 1 : 0, coef: 1 },
    Xn: { valeur: molecule.nocif ? 1 : 0, coef: 1 },
    E: { valeur: molecule.explosible ? 1 : 0, coef: 5 },
    F: { valeur: molecule.facilementInflammable ? 1 : 0, coef: 1 },
    Fplus: { valeur: molecule.extremementInflammable ? 1 : 0, coef: 5 },
  };
}
export function getIndicateursToxicite(molecule) {
  return {
    N: { valeur: molecule.dangereuxPourEnvironnement ? 1 : 0, coef: 2 },
    T: { valeur: molecule.toxique ? 1 : 0, coef: 1 },
    Tplus: { valeur: molecule.tresToxique ? 1 : 0, coef: 5 },
  };
}
export function getIndicateursCMR(molecule) {
  const cancerigene = molecule.r40 || molecule.r45 || molecule.r49;
  const mutagene = molecule.r46;
  const reprotoxique = molecule.r60 || molecule.r61 || molecule.r62 || molecule.r63;

  return {
    R40_R45_R49: { valeur: cancerigene ? 1 : 0, coef: 1 },
    R46: { valeur: mutagene ? 1 : 0, coef: 1 },
    R60_R61_R62_R63: { valeur: reprotoxique ? 1 : 0, coef: 1 },
  };
}

export function getMasseMolaire(molecule) {
  const atomes = moleculeFormulaParser(molecule);
  return new TablePeriodiqueService().getMasseMoleculaire( atomes );
}

export function getNbCarbone(molecule) {
  const atomes = moleculeFormulaParser(molecule);
  return atomes["C"] || 0;
}
  

export function getNParMmol(molecule) {
  const masseG = getMasseG(molecule);
  const purete = molecule.purete;
  const masseMolaire = getMasseMolaire( molecule ); //#TODO mettre dans un service

  return (10 * masseG * purete) / masseMolaire;
}

export function getMasseG(molecule, purete = false) {
  const densite = molecule.densite;
  const volume = molecule.volume;
  const coefPurete = purete ? molecule.purete / 100 : 1;
  return coefPurete * densite * volume;
}

export function getMassePureteG(molecule) {
  const masseG = getMasseG(molecule);
  const purete = molecule.purete / 100;
  return purete * masseG;
}

export function getMasseRecycleeG(molecule) {
  const masseG = getMasseG(molecule);
  const recyclabilite = molecule.recyclabilite / 100;
  return masseG * recyclabilite;
}

export function getMasseRecycleePureteG(molecule) {
  const masseRecyclee = getMasseRecycleeG(molecule);
  const purete = molecule.purete / 100;
  return masseRecyclee * purete;
}

export function getPrixEuro(molecule, purete = false) {
  const masseG = getMasseG(molecule, purete);
  const prix = molecule.prixG;

  return masseG * prix;
}

export function formulaParser(formula, coef = 1) {
  const result = {};
  let match;

  while ((match = REGEX_FORMULA_PARSER.exec(formula)) !== null) {
    const element = match[1];
    const count = (parseInt(match[2]) || 1) * coef;
    result[element] = (result[element] || 0) + count;
  }

  return result;
}

export function moleculeFormulaParser(molecule) {
  return formulaParser(molecule.formule, molecule.coefStoechiometrique);
}

export function atomesDiff(a, b) {
  const diff = {};
  for (const atome of Object.keys({ ...a, ...b })) {
    const atomeA = a[atome] || 0;
    const atomeB = b[atome] || 0;
    diff[atome] = atomeA - atomeB;
  }
  return diff;
}

export function atomesSum(moleculesAtomes) {
  const total = {};
  for (const molecule of moleculesAtomes) {
    for (const [atome, count] of Object.entries(molecule)) {
      total[atome] = (total[atome] || 0) + count;
    }
  }
  return total;
}

export function createMolecule(
  nom,
  formule,
  cas,
  masseMolaire,
  densite,
  nbCarbone,
  nocif,
  irritant,
  explosible,
  dangereuxPourEnvironnement,
  toxique,
  tresToxique,
  facilementInflammable,
  extremementInflammable,
  r40,
  r45,
  r49,
  r46,
  r60,
  r61,
  r62,
  r63,
  danger
) {
  const molecule = new Molecule();

  molecule.nom = nom;
  molecule.formule = formule;
  molecule.cas = cas;
  molecule.masseMolaire = masseMolaire;
  molecule.densite = densite;
  molecule.nbCarbone = nbCarbone;
  molecule.nocif = nocif;
  molecule.irritant = irritant;
  molecule.explosible = explosible;
  molecule.dangereuxPourEnvironnement = dangereuxPourEnvironnement;
  molecule.toxique = toxique;
  molecule.tresToxique = tresToxique;
  molecule.facilementInflammable = facilementInflammable;
  molecule.extremementInflammable = extremementInflammable;
  molecule.r40 = r40;
  molecule.r45 = r45;
  molecule.r49 = r49;
  molecule.r46 = r46;
  molecule.r60 = r60;
  molecule.r61 = r61;
  molecule.r62 = r62;
  molecule.r63 = r63;
  molecule.danger = danger;
  return molecule;
}

export function createMoleculeReaction(molecule) {
  const moleculeReaction = new MoleculeReaction();
  return { ...moleculeReaction, ...molecule };
}

export function createProduit(molecule) {
  const produit = new Produit();
  return { ...produit, ...molecule };

}
