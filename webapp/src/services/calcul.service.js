import { Resultat } from "../models/resultat.model";
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

  calculBilan(resultats) {
    const moyenne = Object.values(resultats).reduce(
      (a, b, _, arr) => a + b / arr.length,
      0,
    );
  }

  resultats( reaction, indicateurs ) {
    const resultats = new Resultat();
    resultats.complete = this.calculReactionComplete( reaction, ...indicateurs );
    resultats.principale = this.calculReactionPrincipale( reaction, ...indicateurs );
    return resultats;
  }
}
export default CalculService;
