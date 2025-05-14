import ResultatMVCView from "../resultat.mvc.view";
import { radarResults } from "../../../utils/calcul.utils";
import ChartService from "../../../services/chart.service";


export default class BarResultatMVCView extends ResultatMVCView {
  chartComplete = null;
  chartPrincipale = null;
  constructor(controller, canvasReactionPrincipale, canvasReactionComplete) {
    super(controller);
    this.canvasReactionPrincipale = canvasReactionPrincipale;
    this.canvasReactionComplete = canvasReactionComplete;
    this.chartService = new ChartService();
  }


  resultatsReactionPrincipale(resultatsReactionPrincipale) {
    const resultatsBilan = radarResults(resultatsReactionPrincipale);
    const labels = Object.keys(resultatsBilan);
    const data = Object.values(resultatsBilan);
    if (this.chartPrincipale) {
      this.chartPrincipale.destroy();
    }
    this.chartPrincipale = this.chartService.createBarChart(
      this.canvasReactionPrincipale,
      "Réaction",
      "Réaction principale",
      labels,
      data
    );
  }

  resultatsReactionComplete(resultatsReactionComplete) {
    const resultatsBilan = radarResults(resultatsReactionComplete);
    const labels = Object.keys(resultatsBilan);
    const data = Object.values(resultatsBilan);
    if (this.chartComplete) {
      this.chartComplete.destroy();
    }
    this.chartComplete = this.chartService.createBarChart(
      this.canvasReactionComplete,
      "Réaction",
      "Réaction complète",
      labels,
      data
    );
  }
}
