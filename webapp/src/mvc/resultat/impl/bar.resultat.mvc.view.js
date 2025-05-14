import { Chart } from "chart.js";
import { RADAR_STYLES } from "../../../settings";
import ResultatMVCView from "../resultat.mvc.view";
import { radarResults } from "../../../utils/calcul.utils";

export default class BarResultatMVCView extends ResultatMVCView {
  chartComplete = null;
  chartPrincipale = null;
  constructor(controller, canvasReactionPrincipale, canvasReactionComplete) {
    super(controller);
    this.canvasReactionPrincipale = canvasReactionPrincipale;
    this.canvasReactionComplete = canvasReactionComplete;
  }


  resultatsReactionPrincipale(resultatsReactionPrincipale) {
    const resultatsBilan = radarResults(resultatsReactionPrincipale);
    const labels = Object.keys(resultatsBilan);
    const data = Object.values(resultatsBilan);
    if (this.chartPrincipale) {
      this.chartPrincipale.destroy();
    }
    this.chartPrincipale = this._createBarChart(
      this.canvasReactionPrincipale,
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
    this.chartComplete = this._createBarChart(
      this.canvasReactionComplete,
      "Réaction complète",
      labels,
      data
    );
  }

  _createBarChart(element, label, labels, data) {
    return new Chart(element, {
      type: "bar",
      data: {
        labels,
        datasets: [{ label, data, ...RADAR_STYLES }],
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: "Réaction et traitement post-réactionnel",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
          },
        },
      },
    });
  }

  createBarChart(canvasId, title, labels, data) {
    new Chart(document.getElementById(canvasId), {
      type: "bar",
      data: {
        labels,
        datasets: [{ label: title.split("–")[0], data, ...RADAR_STYLES }],
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: title,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
          },
        },
      },
    });
  }
}
