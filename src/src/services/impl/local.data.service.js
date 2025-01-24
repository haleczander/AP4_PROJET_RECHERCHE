import DataService from "../data.service";

export class LocalDataService extends DataService {
    _molecules = [];
    _activations = [];

    DATA_PATH = "data/db.json";

    constructor() {
        super();
        fetch( this.DATA_PATH )
            .then( database => database.data )
            .then( ({ molecules, activations }) => {
                this._molecules = molecules;
                this._activations = activations;
            }
        );
    }

    findAllMolecules() {
        return this._molecules;
    }

    findMoleculesByAny( needle ) {
        const filter = ( needle, molecule ) => {
            return molecule.cas == needle 
            || molecule.nom.toUpperCase().contains( needle.toUpperCase() )
            || molecule.formule.toUpperCase().contains( needle.toUpperCase() );
        }

        return this._molecules.filter( molecule => filter( needle, molecule ) );
    }
    
}