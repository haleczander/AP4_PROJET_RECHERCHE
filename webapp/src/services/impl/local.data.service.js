import DataService from "../data.service";
import json from "../../../data/db.json";


export class LocalDataService extends DataService {
    _molecules = [];
    _activations = [];

    constructor() {
        super();
        
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
            || this._filterNom(needle, molecule)
            || this._filterFormule(needle, molecule);
        };

        return this._molecules.filter(molecule => filter(needle, molecule));
    }

    findMoleculesByCas(needle) {
        const sanitizeCas  = this._molecules.filter(molecule => this._filterCas(needle, molecule));
    
        if (sanitizeCas .length > 0) {
            return sanitizeCas ;
        } else {
            return [];
        }
    }

    findMoleculesByFormule(needle) {
        const sanitizeFormule  = this._molecules.filter(molecule => this._filterFormule(needle, molecule));
    
        if (sanitizeFormule .length > 0) {
            return sanitizeFormule ;
        } else {
            return [];
        }
    }
    

    /* HELPER METHOD */

    _filterCas(needle, molecule) {
        return molecule.cas.replace(/-/g, "").includes(needle.replace(/-/g, ""));
    }  

    _filterNom(needle, molecule) {
        return molecule.nom.toUpperCase().includes(needle.toUpperCase());
    }

    _filterFormule(needle, molecule) {
        return molecule.formule.replace(/\s+/g, "").toUpperCase().includes(needle.replace(/\s+/g, "").toUpperCase());
    }
}
