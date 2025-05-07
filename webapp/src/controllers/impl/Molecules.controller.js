import services from "../../services/services";
import Controller from "../Controller";
import { filterMolecule } from "../../utils/filters.utils";
import { htmlFormulaFormatter } from "../../utils/html.utils";
import { round } from "../../utils/math.utils";


import { getMasseMolaire, getNbCarbone } from "../../utils/molecules.utils";
export default class MoleculesController extends Controller {
  init() {
    this.dataService = services.dataService;

    this.molecules = this.dataService.findAllMolecules();
    this.sortState = { key: null, direction: null };
    this._initTable();
    this._initSearchBar();
    this._initExport();
    this.updateData(this.molecules);
  }

  _initExport() {
    const btn = this.container.querySelector("#export-btn");
    this.addListener(btn, "click", (e) => {
      e.preventDefault();
      const data = {
        version: "#.#",
        date: new Date().toISOString(),
        data: {
          molecules: this.dataService.findAllMolecules(),
          activations: this.dataService.findAllActivations(),
        },
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `export-molecules-${data.date}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }

  _initSearchBar() {
    const input = this.container.querySelector("#search-input");
    this.addListener(input, "input", () => {
      const filtered = this.molecules.filter(m =>
        filterMolecule(input.value, m)
      );
      this.updateData(filtered);
    });
  }

  _initTable() {
    this.moleculesTable = this.container.querySelector("#molecules-table");
    const thead = document.createElement("thead");
    const row = document.createElement("tr");

    this.headers = [
      { label: "Nom", key: "nom" },
      { label: "Formule brute", key: "formule" },
      { label: "Masse molaire", key: "masseMolaire" },
      { label: "C", key: "nbCarbone" },
      { label: "Nocif", key: "nocif" },
      { label: "Irritant", key: "irritant" },
      { label: "Explosible", key: "explosible" },
      { label: "Toxique", key: "toxique" },
      { label: "Inflammable", key: "extremementInflammable" },
    ];

    this.headers.forEach(({ label, key }) => {
      const th = document.createElement("th");
      th.textContent = label;
      th.style.cursor = "pointer";
      th.dataset.key = key;
      th.addEventListener("click", () => this._toggleSort(key, th));
      row.appendChild(th);
    });

    thead.appendChild(row);
    this.moleculesTable.appendChild(thead);
    this.moleculesTableData = document.createElement("tbody");
    this.moleculesTable.appendChild(this.moleculesTableData);
  }

  _toggleSort(key, th) {
    const state = this.sortState;
    const ths = this.moleculesTable.querySelectorAll("th");

    ths.forEach((h, i) => h.textContent = this.headers[i].label);

    if (state.key === key) {
      state.direction = state.direction === "asc" ? "desc" : "asc";
    } else {
      state.key = key;
      state.direction = "asc";
    }

    const sorted = [...this.molecules].sort((a, b) => {
      let va = a[key], vb = b[key];
      if (typeof va === "boolean") va = va ? 1 : 0, vb = vb ? 1 : 0;
      if (typeof va === "string") return state.direction === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      return state.direction === "asc" ? va - vb : vb - va;
    });

    this.updateData(sorted);
  }

  updateData(mols) {
    this.moleculesTableData.innerHTML = "";
    mols.forEach(m => this.moleculesTableData.appendChild(this._createRow(m)));
  }

  _createTd( innerHtml ) {
    const td = document.createElement("td");
    td.innerHTML = innerHtml;
    return td;
  }

  _createRow(molecule) {
    const tr = document.createElement("tr");

    tr.appendChild(this._createTd(molecule.nom));
    tr.appendChild(this._createTd(htmlFormulaFormatter(molecule.formule)));
    tr.appendChild(this._createTd(round(getMasseMolaire(molecule), 2)));
    tr.appendChild(this._createTd(getNbCarbone(molecule)));
    tr.appendChild(this._createTd(molecule.nocif ? "\u2713" : ""));
    tr.appendChild(this._createTd(molecule.irritant ? "\u2713" : ""));
    tr.appendChild(this._createTd(molecule.explosible ? "\u2713" : ""));
    tr.appendChild(this._createTd(molecule.toxique ? "\u2713" : ""));
    tr.appendChild(this._createTd(molecule.extremementInflammable ? "\u2713" : ""));

    return tr;
  }
}