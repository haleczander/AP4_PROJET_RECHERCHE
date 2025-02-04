import Molecule from "../models/molecule.model";
import MoleculeReaction from "../models/molecule.reaction.model";

function getCoef( molecule, indicateursFn ) {
    const masseG = getMasseG( molecule );
    const indicateurs = indicateursFn( molecule );
    const danger = moyenneIndicateurs( indicateurs );

    return ( 1 - danger ) * masseG;
}

function moyenneIndicateurs( indicateurs ) {
    let somme = 0;
    let coefs = 0;
    for (let indicateur in indicateurs) {
        const { valeur, coef } = indicateurs[indicateur];
        somme += (valeur * coef);
        coefs += coef;
    }

    return coefs == 0 ? 0 : somme / coefs;
}

export function getCoefDanger( molecule ) {
    return getCoef( molecule, getIndicateursDanger );
}
export function getCoefToxicite( molecule ) {
    return getCoef( molecule, getIndicateursToxicite );
}
export function getCoefCMR( molecule ) {
    return getCoef( molecule, getIndicateursCMR );
}

export function getDanger( molecule ) {
    const indicateurs = getIndicateursDanger( molecule );
    return moyenneIndicateurs( indicateurs );
}
export function getToxicite( molecule ) {
    const indicateurs = getIndicateursToxicite( molecule );
    return moyenneIndicateurs( indicateurs );
}
export function getCMR( molecule ) {
    const indicateurs = getIndicateursCMR( molecule );
    return moyenneIndicateurs( indicateurs );
}

export function getIndicateursDanger( molecule ){
    return {
        Xi: { valeur: molecule.irritant ? 1 : 0, coef: 1 },
        C: { valeur: molecule.corrosif ? 1 : 0, coef: 1 },
        Xn: { valeur: molecule.nocif ? 1 : 0, coef: 1 },
        E: { valeur: molecule.explosible ? 1 : 0, coef: 5 },
        F: { valeur: molecule.facilementInflammable ? 1 : 0, coef: 1 },
        Fplus: { valeur: molecule.extremementInflammable ? 1 : 0, coef: 5 }
    };
}
export function getIndicateursToxicite( molecule ){
    return {
        N: { valeur: molecule.dangereuxPourEnvironnement ? 1 : 0, coef: 2 },
        T: { valeur: molecule.toxique ? 1 : 0, coef: 1 },
        Tplus: { valeur: molecule.tresToxique ? 1 : 0, coef: 5 }
    };
}
export function getIndicateursCMR( molecule ){
    const isR40_R45_R49 = molecule.r40 || molecule.r45 || molecule.r49;
    const isR60_R61_R62_R63 = molecule.r60 || molecule.r61 || molecule.r62 || molecule.r63;    return {
        R40_R45_R49: { valeur: isR40_R45_R49 ? 1 : 0, coef: 1 },
        R46: { valeur: molecule.r46 ? 1 : 0, coef: 1 },
        R60_R61_R62_R63: { valeur: isR60_R61_R62_R63 ? 1 : 0, coef: 1 }
    };
}

export function getNParMmol( molecule ){
    const masseG = getMasseG( molecule );
    const purete = molecule.purete;
    const masseMolaire = molecule.masseMolaire;

    return ( 10 * masseG * purete ) / masseMolaire;
}

export function getMasseG( molecule ){
    const densite = molecule.densite;
    const volume = molecule.volume;

    return densite * volume;
}

export function getPrixEuro( molecule ){
    const masseG = getMasseG( molecule );
    const prix = molecule.prixG;

    return masseG * prix;
}


export function createMolecule(
    nom, formule, cas, masseMolaire, densite, nbCarbone,
    nocif, irritant, explosible, dangereuxPourEnvironnement, 
    toxique, tresToxique, facilementInflammable, extremementInflammable, 
    r40, r45, r49, r46, r60, r61, r62, r63
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

    return molecule;
}

export function createMoleculeReaction( molecule ) {
    const moleculeReaction = new MoleculeReaction();

    moleculeReaction.nom = molecule.nom;
    moleculeReaction.formule = molecule.formule;
    moleculeReaction.cas = molecule.cas;
    moleculeReaction.masseMolaire = molecule.masseMolaire;
    moleculeReaction.densite = molecule.densite;
    moleculeReaction.nbCarbone = molecule.nbCarbone;
    moleculeReaction.nocif = molecule.nocif;
    moleculeReaction.irritant = molecule.irritant;
    moleculeReaction.explosible = molecule.explosible;
    moleculeReaction.dangereuxPourEnvironnement = molecule.dangereuxPourEnvironnement;
    moleculeReaction.toxique = molecule.toxique;
    moleculeReaction.tresToxique = molecule.tresToxique;
    moleculeReaction.facilementInflammable = molecule.facilementInflammable;
    moleculeReaction.extremementInflammable = molecule.extremementInflammable;
    moleculeReaction.r40 = molecule.r40;
    moleculeReaction.r45 = molecule.r45;
    moleculeReaction.r49 = molecule.r49;
    moleculeReaction.r46 = molecule.r46;
    moleculeReaction.r60 = molecule.r60;
    moleculeReaction.r61 = molecule.r61;
    moleculeReaction.r62 = molecule.r62;
    moleculeReaction.r63 = molecule.r63;

    return moleculeReaction;
}
