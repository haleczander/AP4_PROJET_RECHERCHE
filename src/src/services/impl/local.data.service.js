import DataService from "../data.service";
import json from "../../../data/db.json";


export class LocalDataService extends DataService {
    _molecules = [];
    _activations = [];

    constructor() {
        super();
        console.log("Chargement du json local en mémoire : ", json);
        
        const { molecules, activations } = json.data;
        this._molecules = molecules;
        this._activations = activations;
    }

    findAllMolecules() {
        return this._molecules;
    }

    findMoleculesByAny(needle) {
        const filter = (needle, molecule) => {
            return this._filterCas(needle, molecule) 
            || this._filterName(needle, molecule)
            || this._filterFormule(needle, molecule);
        };

        return this._molecules.filter(molecule => filter(needle, molecule));
    }

    findMoleculesByCas(needle) {
        const matchingMolecules = this._molecules.filter(molecule => this._filterCas(needle, molecule));
    
        if (matchingMolecules.length > 0) {
            return matchingMolecules;
        } else {
            console.log("Aucune molécule trouvée avec ce CAS.");
            return [];
        }
    }

    findMoleculesByFormule(needle) {
        const matchingMolecules = this._molecules.filter(molecule => this._filterFormule(needle, molecule));
    
        if (matchingMolecules.length > 0) {
            return matchingMolecules;
        } else {
            console.log("Aucune molécule trouvée avec cette formule.");
            return [];
        }
    }
    

    /* HELPER METHOD */

    _filterCas(needle, molecule) {
        return molecule.cas.replace(/-/g, "").includes(needle.replace(/-/g, ""));
    }  

    _filterName(needle, molecule) {
        return molecule.nom.toUpperCase().includes(needle.toUpperCase());
    }

    _filterFormule(needle, molecule) {
        return molecule.formule.replace(/\s+/g, "").toUpperCase().includes(needle.replace(/\s+/g, "").toUpperCase());
    }
}
