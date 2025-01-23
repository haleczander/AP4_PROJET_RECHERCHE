import MoleculeReaction from "../models/molecule.reaction.model";

const molecule = new MoleculeReaction();

function getCoef( molecule, indicateursFn ) {
    const masse = molecule.masse ?? 0;
    const indicateurs = indicateursFn( molecule );
    const danger = moyenneIndicateurs( indicateurs );
    return ( 1 - danger ) * masse;
}

function moyenneIndicateurs( indicateurs ) {
    let somme = 0;
    let coefs = 0;
    for (let indicateur in indicateurs) {
        const { valeur, coef } = indicateurs[indicateur];
        somme += (valeur * coef);
        coefs += 1;
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
    const masse = molecule.masse;
    const prix = molecule.prixG;

    return masse * prix;
}
