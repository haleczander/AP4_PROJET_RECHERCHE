import DataService from "../data.service";
import json from "../../../data/db.json";


export class LocalDataService extends DataService {
    _molecules = [];
    _activations = [];

    constructor() {
        super();
        console.log("Chargement du json local en mémoire : ", json);  // Vérifie l'objet json
        
        // Accède aux données sous le champ 'data' dans l'objet json
        const { molecules, activations } = json.data;
        this._molecules = molecules;
        this._activations = activations;
    }

    // Méthode pour ajouter une molécule
    // addMolecule(newMolecule) {

    //     // Vérifie que la molécule ne soit pas déjà présente
    //     if (this._molecules.some(molecule => molecule.cas === newMolecule.cas)) {
    //         console.log("La molécule avec ce CAS existe déjà.");
    //         return;
    //     }

    //     // Ajouter la nouvelle molécule à la liste
    //     this._molecules.push(newMolecule);

    //     // Mettre à jour les données dans le LocalStorage
    //     const updatedJsonData = {
    //     version: 1,
    //     data: {
    //         molecules: this._molecules,
    //         activations: this._activations
    //     }
    // };

    // // Je n'ai pas réusie à trouver un moyen de modifier un fichier JS OU JSON a partir d'un javascript client.

    // }

    // Vérifie si les données sont chargées avant de retourner les molécules
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
        // Nettoie le needle pour enlever les tirets
        const cleanedNeedle = needle.replace(/-/g, "");

        // Recherche les molécules dont le CAS contient le needle
        const matchingMolecules = this._molecules.filter(molecule => {
            const moleculeCas = molecule.cas.replace(/-/g, ""); // Nettoie également le cas de la molécule
            return moleculeCas.includes(cleanedNeedle);  // Recherche une correspondance partielle
        });

        // Si des molécules correspondent, les retourner
        if (matchingMolecules.length > 0) {
            return matchingMolecules;
        } else {
            console.log("Aucune molécule trouvée avec ce CAS.");
            return [];
        }
    }

    findMoleculesByFormule(needle) {
        // Nettoie le needle pour enlever les espaces et les caractères spéciaux
        const cleanedNeedle = needle.replace(/\s+/g, "").toUpperCase();
    
        // Recherche les molécules dont la formule contient le needle
        const matchingMolecules = this._molecules.filter(molecule => {
            const moleculeFormule = molecule.formule.replace(/\s+/g, "").toUpperCase(); // Nettoie la formule de la molécule
            return moleculeFormule.includes(cleanedNeedle);  // Recherche une correspondance partielle
        });
    
        // Si des molécules correspondent, les retourner
        if (matchingMolecules.length > 0) {
            return matchingMolecules;
        } else {
            console.log("Aucune molécule trouvée avec cette formule.");
            return [];
        }
    }
    

    /* HELPER METHOD */

    _filterCas(needle, molecule) {
        return molecule.cas === needle;
    }

    _filterName(needle, molecule) {
        return molecule.nom.toUpperCase().includes(needle.toUpperCase());  // Recherche partielle du nom
    }

    _filterFormule(needle, molecule) {
        return molecule.formule.toUpperCase().includes(needle.toUpperCase());  // Recherche partielle de la formule
    }
}
