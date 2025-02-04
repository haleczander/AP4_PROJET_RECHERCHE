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

    findMoleculesByCas( needle ) {
        return this._molecules.filter( molecule => this._filterCas( needle, molecule ))
    }

    findMoleculesByFormule( needle ) {
        return this._molecules.filter( molecule => this._filterFormule( needle, molecule ))
    }
    
    _filterCas(needle, molecule) {
        const sanitizeCas =  cas => cas.replaceAll('-', '');

        return sanitizeCas( molecule.cas ).includes( sanitizeCas( needle ) );
    }

    _filterNom(needle, molecule) {
        return molecule.nom.toUpperCase().includes(needle.toUpperCase());
    }

    _filterFormule(needle, molecule) {
        return molecule.formule.toUpperCase().includes( needle.toUpperCase());
    }
}
