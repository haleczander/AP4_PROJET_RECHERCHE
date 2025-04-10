export default class TableResultatMVCView {
  constructor(controller, container) {
    this.controller = controller;
    this.container = container; // Conteneur où le tableau sera inséré
  }

  resultats(resultats) {
    this.updateTable(
      resultats.principale,
      resultats.complete,
      resultats.bilanPrincipale,
      resultats.bilanComplete 
    );
  }
  /**
   * Met à jour le tableau avec les résultats fournis.
   * @param {Object} rp - Résultats de la réaction principale.
   * @param {Object} rc - Résultats de la réaction complète.
   * @param {number} bp - Bilan de la réaction principale.
   * @param {number} bc - Bilan de la réaction complète.
   */
  updateTable(rp, rc, bp, bc) {
    if (!this.container) {
      console.error("Conteneur pour le tableau introuvable !");
      return;
    }

    this.container.innerHTML = "";

    const tableContainer = document.createElement("div");
    tableContainer.className = "table-container";

    const title = document.createElement("h3");
    title.textContent = "Tableau comparatif des indicateurs";
    tableContainer.appendChild(title);

    const table = document.createElement("table");
    table.id = "tableau-reaction";

    const header = document.createElement("tr");
    ["Indicateur", "Réaction principale", "Réaction complète"].forEach((t) => {
      const th = document.createElement("th");
      th.textContent = t;
      header.appendChild(th);
    });
    table.appendChild(header);

    for (const [indicateur, val] of Object.entries(rp)) {
      const row = document.createElement("tr");
      [indicateur, val, rc[indicateur] ?? "-"].forEach((v) => {
        const td = document.createElement("td");
        td.textContent = v;
        row.appendChild(td);
      });
      table.appendChild(row);
    }

    const bilanRow = document.createElement("tr");
    ["Bilan", `${(bp * 100).toFixed(2)} %`, `${(bc * 100).toFixed(2)} %`].forEach((v, i) => {
      const td = document.createElement("td");
      td.textContent = v;
      if (i === 0) td.style.fontWeight = "bold";
      bilanRow.appendChild(td);
    });
    table.appendChild(bilanRow);

    tableContainer.appendChild(table);
    this.container.appendChild(tableContainer);

    const printButton = document.getElementById("imprimer-btn");
    if (printButton) {
      printButton.addEventListener("click", () => {
        window.print();
      });
    }
  }
}