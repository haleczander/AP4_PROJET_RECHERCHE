import { Chart } from "chart.js";
import { RADAR_STYLES } from "../../../settings";
import ResultatMVCView from "../resultat.mvc.view";
import { radarResults } from "../../../utils/calcul.utils";
import ChartService from "../../../services/chart.service";

export default class RadarResultatMVCView extends ResultatMVCView {
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
    this.chartPrincipale = this.chartService.createRadarChart(
      this.canvasReactionPrincipale,
      "Réaction et traitement post-réactionnel",
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
    this.chartComplete = this.chartService.createRadarChart(
      this.canvasReactionComplete,
      "Réaction et traitement post-réactionnel",
      "Réaction complète",
      labels,
      data
    );
  }

}
