export class CoefCMRIndicateur {
    nom = null;
    code = null;

    constructor( nom, code ) {
        this.nom = nom;
        this.code = code;
    }


    reactionPrincipale( reaction ){
        throw new Error("La méthode n'est pas implémentée."); 
    };

    reactionComplete( reaction ){
        throw new Error("La méthode n'est pas implémentée.");
    };
}

export default CoefCMRIndicateur;