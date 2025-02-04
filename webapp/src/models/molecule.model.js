export class Molecule {
    nom = null;
    formule = null;
    cas = null;
    masseMolaire = 0;
    densite = 0;
    nbCarbone = 0;

    nocif = false;
    irritant = false;
    explosible = false;
    dangereuxPourEnvironnement = false;
    toxique = false;
    tresToxique = false;
    facilementInflammable = false;
    extremementInflammable = false;
    r40 = false;
    r45 = false;
    r49 = false;
    r46 = false;
    r60 = false;
    r61 = false;
    r62 = false;
    r63 = false;

    constructor() {
    }
    
}

export default Molecule;