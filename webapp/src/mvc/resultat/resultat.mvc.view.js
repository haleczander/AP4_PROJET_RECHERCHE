export default class ResultatMVCView {
  constructor(controller) {
    this.controller = controller;
  }

  resultats(resultats, resultatsBilan) {
    this.resultatsReactionPrincipale(resultats.principale);
    this.resultatsReactionComplete(resultats.complete); 
    this.resultatsResidu(resultats.residu); 
  }

  resultatsReactionPrincipale( resultatsReactionPrincipale ) {}

  resultatsReactionComplete( resultatsReactionComplete ) {}

  resultatsResidu( residu ) {}


  displayResults(indicateurs, calculService) {
    const { rcComplete, rcPrincipale } = this.controller.calculerResultats(indicateurs, calculService);
    const labels = {
      principale: Object.keys(rcPrincipale),
      complete: Object.keys(rcComplete),
    };
    const data = {
      principale: Object.values(rcPrincipale),
      complete: Object.values(rcComplete),
    };

    this.controller.createCharts({
      radarPrincipale: "radar-chart-principale",
      radarComplete: "radar-chart-complete",
      barPrincipale: "bar-chart-principale",
      barComplete: "bar-chart-complete",
    }, labels, data);

    this.controller.populateTable(document.getElementById("capture-zone"), rcPrincipale, rcComplete, 0, 0); // Remplacez 0 par les valeurs réelles de bilan
  }
}
