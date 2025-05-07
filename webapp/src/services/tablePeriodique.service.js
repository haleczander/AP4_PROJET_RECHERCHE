import periodicTable from "../../data/periodicTable";

export default class TablePeriodiqueService {

    elements = {};

    constructor() {
        periodicTable.elements
            .map((element) => ({ nom: element.name, masse_atomique: element.atomic_mass, symbole: element.symbol }))
            .forEach(element => this.elements[element.symbole] = element);
    }

    getMasseAtomique(symbole) {
        if (this.elements[symbole]) {
            return this.elements[symbole].masse_atomique;
        } else {
            throw new Error(`Element with symbol ${symbole} not found`);
        }
    }

    getMasseMoleculaire(elements) {
        return Object.entries(elements).reduce((masseMoleculaire, [element, count]) => {
            const masseAtomique = this.getMasseAtomique(element);
            return masseMoleculaire + masseAtomique * count;
        }, 0);
    }

}
