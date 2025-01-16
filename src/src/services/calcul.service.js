class CalculService {
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

    }

    calculEfficaciteMassique(){
        throw new Error("La méthode n'est pas implémentée."); 

    }

    calculRendemente(){
        throw new Error("La méthode n'est pas implémentée."); 

    }

    calculEconomieAtomes(){
        throw new Error("La méthode n'est pas implémentée."); 

    }
    
    calculEconomieCarbone(){
        throw new Error("La méthode n'est pas implémentée."); 

    }
}