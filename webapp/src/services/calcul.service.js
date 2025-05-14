import { Resultat } from "../models/resultat.model";
import { BILAN_INDICATEURS } from '../settings';
import { round } from "../utils/math.utils";

export class CalculService {
  indicateurs = [];

  constructor(precision = 3) {
    this.precision = precision;
  }

  calculReactionPrincipale(reaction, ...indicateurs) {
    const results = {};
    indicateurs.forEach((indicateur) => {
      const resultat = round(
        indicateur.reactionPrincipale(reaction),
        this.precision,
      );
      results[indicateur.code] = resultat;
    });
    return results;
  }

  calculReactionComplete(reaction, ...indicateurs) {
    const results = {};
    indicateurs.forEach((indicateur) => {
      const resultat = round(
        indicateur.reactionComplete(reaction),
        this.precision,
      );
      if (null !== resultat) {
        results[indicateur.code] = resultat;
      }
    });
    return results;
  }

    resultatsBilan( results ) {
        const bilanKeys = BILAN_INDICATEURS.map( indicateur => new indicateur().code );
        const filtered = Object.fromEntries( Object.entries( results ).filter(([key]) => bilanKeys.includes(key)) );
        return filtered;    
    }

  calculBilan(resultats) {
    return Object.values(resultats).reduce(
      (a, b, _, arr) => a + b / arr.length,
      0,
    );
  }

  resultats( reaction, indicateurs ) {
    const resultats = new Resultat();
    resultats.complete = this.calculReactionComplete( reaction, ...indicateurs );
    resultats.principale = this.calculReactionPrincipale( reaction, ...indicateurs );
    const bilanComplete = this.resultatsBilan( resultats.complete );
    const bilanPrincipale = this.resultatsBilan( resultats.principale );
    resultats.bilanComplete = this.calculBilan( bilanComplete );
    resultats.bilanPrincipale = this.calculBilan( bilanPrincipale );
    return resultats;
  }
}
export default CalculService;
