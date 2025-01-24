export class MoleculeSevice {
    constructor() {
        if ( this.constructor == MoleculeSevice ) {
            throw new Error("La classe est abstraite et ne peut pas être instanciée.");
        };
    }

    findByCas( cas ) {
        throw new Error("La méthode n'est pas implémentée.");
    }

    findAllByAny( needle ) {
        throw new Error("La méthode n'est pas implémentée.");
    }

}

export default MoleculeSevice;