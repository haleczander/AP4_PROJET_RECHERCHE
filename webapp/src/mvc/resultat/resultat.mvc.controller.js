export default class ResultatMVCController {
  views = [];
 resultats;
  constructor() {
  }

  updateResults(resultats) {
    this.resultats = resultats;
    this.updateViews();
  }

  addView(view) {
    this.views.push(view);
  }

  updateViews() {
    this.views.forEach((view) => {
      view.resultats(this.resultats);
    });
  }

  populateTable(zone, rp, rc, bp, bc) {
    this.views.forEach((view) => {
      view.populateTable(zone, rp, rc, bp, bc);
    });
  }
}
