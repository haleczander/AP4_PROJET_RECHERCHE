import services from "../../services/services";
import Controller from "../Controller";
import { filterMolecule } from "../../utils/filters.utils";
import { htmlFormulaFormatter } from "../../utils/html.utils";
import { round } from "../../utils/math.utils";
import DangerService from "../../services/danger.service";


import { getMasseMolaire, getNbCarbone } from "../../utils/molecules.utils";
import { exportJson, importJson } from "../../utils/importExport.utils";
import AssetService from "../../services/asset.service";
export default class MoleculesController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.dangerService = new DangerService();
    this.assetService = new AssetService();

    this._initData();
    this.sortState = { key: null, direction: null };
    this._initTable();
    this._initSearchBar();
  }

  async _initData() {
    this.loading(true);
    this.dataService.ready().then(() => {
      this.molecules = this.dataService.findAllMolecules();
      this._initExport();
      this._initImport();
    })
      .then(() => this.updateData(this.molecules))
      .then(() => this.loading(false));
  }

  _initImport() {
    const btn = this.container.querySelector("#import-btn");
    this.addListener(btn, "click", (e) => {
      e.preventDefault();
      const onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (!data || !data.data || !data.data.molecules || !data.data.activations) {
            throw new Error("Invalid JSON structure");
          }
          this.dataService.importData(data.data.molecules, data.data.activations);
          this.molecules = this.dataService.findAllMolecules();
          this.updateData(this.molecules);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };
      importJson(onload);
    });
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
      exportJson(data, `export-molecules-${data.date}`);
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

    this.columns = [
      { label: "Nom", key: "nom", valuefn: (m) => m.nom },
      { label: "Formule brute", key: "formule", valuefn: (m) => htmlFormulaFormatter(m.formule) },
      { label: "CAS", key: "cas", valuefn: (m) => m.cas },
      { label: "Masse molaire", key: "masseMolaire", valuefn: (m) => round(getMasseMolaire(m), 2) },
      { label: "Densité", key: "densite", valuefn: (m) => m.densite },
      { label: "", key: "danger", valuefn: (m) => this._createPictograms(m), dom:true },
      { label: "", key: "delete", valuefn: (m) => this._createDeleteButton(m), dom:true}
    ];

    this.columns.forEach(({ label, key }) => {
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

    ths.forEach((h, i) => h.textContent = this.columns[i].label);

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

  _createDeleteButton( molecule ) {
    const deleteButton = document.createElement("button");
    deleteButton.title = "Supprimer cette molécule";
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "\u274C";
    const deleteFn = () => {
      if (confirm(`Supprimer définitivement la molécule "${molecule.nom}" ?`)) {
        this.dataService.deleteMolecule(molecule); // <- appel avec objet complet
        this._initData();
      }
    };
    this.addListener( deleteButton, "click", deleteFn );
    return deleteButton;
  }

  updateData(mols) {
    this.moleculesTableData.innerHTML = "";
    mols.forEach(m => this.moleculesTableData.appendChild(this._createRow(m)));
  }

  _createTd(innerHtml, isDom=false) {
    const td = document.createElement("td");
    if (isDom) {
      td.appendChild(innerHtml);
    } else {
    td.innerHTML = innerHtml;
    }
    return td;
  }

  _createRow(molecule) {
    const tr = document.createElement("tr");
    this.columns.forEach(({ key, valuefn, dom }) => {
      const td = this._createTd(valuefn(molecule), dom);
      tr.appendChild(td);
    });
    return tr;
  }

  _createPictograms(molecule) {
    const pictograms = document.createElement("div");
    pictograms.classList.add("pictograms");
    this.dangerService.getMoleculePictogrammes(molecule)
      .map( GHS => this._createPictogram(GHS))
      .forEach( pictogram => pictograms.appendChild(pictogram));
    return pictograms;
  }

  _createPictogram(GHS) {
    const pictogram = this.assetService.icon(`${GHS}.svg`);
    pictogram.alt = `${GHS}`;
    pictogram.classList.add("pictogram");
    return pictogram;
  }
}