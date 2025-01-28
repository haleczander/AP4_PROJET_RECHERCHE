export class CalculService {
    constructor() {
        if ( this.constructor == CalculService ) {
            throw new Error("La classe est abstraite et ne peut pas être instanciée.");
        };
    }

    calculReaction( reaction ) {
        throw new Error("La méthode n'est pas implémentée."); 
    }

    calculCoefToxicite(){
        throw new Error("La méthode n'est pas implémentée."); 

    }

    calculCoefDangerosité(){
        throw new Error("La méthode n'est pas implémentée."); 

    }

    calculPRM(){
        throw new Error("La méthode n'est pas implémentée."); 
        // PRM = (Masse des matières recyclées ou réutilisables / Masse totale des matières introduites dans le processus) × 100
    }

    calculEfficaciteMassique(){
        throw new Error("La méthode n'est pas implémentée."); 
        // EF = Masse des intrants / Masse des produits
    }

    calculRendemente(){
        throw new Error("La méthode n'est pas implémentée."); 

    }

    // aussi appelé économie atomique
    calculUtilisationAtomique(){
        throw new Error("La méthode n'est pas implémentée."); 
        //Utilisation Atomique = (Masse du produit désiré / Σ Masse des réactifs) × 100
    }
    
    calculEconomieCarbone(){
        throw new Error("La méthode n'est pas implémentée."); 

    }
  
}
export default CalculService;