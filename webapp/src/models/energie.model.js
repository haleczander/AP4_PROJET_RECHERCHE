export class Energie {
    constructor( nom, prixKWh ) {
        this.nom = nom;
        this.prixKWh = prixKWh;
    }

    setPrixKWh( prix ) {
        this.prixKWh = prix;
    }

}

export default Energie;