export class CalculService {
    indicateurs = []

    constructor() {}

    calculReaction( reaction, decimales ) {
        let results = {}
        this.indicateurs.forEach( indicateur => {
            const principale = this.round( indicateur.reactionPrincipale(reaction), decimales );
            const complete = this.round( indicateur.reactionComplete(reaction), decimales );
            results[ indicateur.code ] = { complete, principale }
        } );
        return results;

    }

    round( valeur, decimales ) {
        const coef = Math.pow(10, decimales);
        return Math.round( valeur * coef ) / coef;
    }

  
}
export default CalculService;