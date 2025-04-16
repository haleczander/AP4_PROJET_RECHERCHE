import services from "../../services/services";
import Controller from "../Controller";
import { filterMolecule } from "../../utils/filters.utils";
export default class MoleculesController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.molecules = this.dataService.findAllMolecules();
    this._initTable();
    this._initSearchBar();
    this._initExport();
    this.updateData(this.molecules);
  }


  _initExport() {
    const exportBtn = this.container.querySelector("#export-btn");
    const downloadFn = (event) => {
      event.preventDefault();
    

      const now = new Date();
      const dateStr = now.toISOString();
    
      const exportData = {
        version: "#.#",
        date: dateStr,
        data: {
          molecules: this.dataService.findAllMolecules(),
          activations: this.dataService.findAllActivations(),
        },
      };
    
      const json = JSON.stringify(exportData, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
    
      const a = document.createElement("a");
      a.href = url;
      a.download = `export-molecules-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    this.addListener( exportBtn, "click", downloadFn );
  }

  _initSearchBar() {
    const searchInput = this.container.querySelector("#search-input");

    const eventFn = () => {
      const filtered = this.molecules.filter((molecule) =>
        filterMolecule(searchInput.value, molecule),
      );
      this.updateData(filtered);
    };

    this.addListener(searchInput, "input", eventFn);
  }

  _initTable() {
    this.moleculesTable = this.container.querySelector("#molecules-table");
    const headerRow = document.createElement("tr");

    const headers = [
      { label: "Nom", key: "nom" },
      { label: "Formule", key: "formule" },
      { label: "Masse molaire", key: "masseMolaire" },
      { label: "C", key: "nbCarbone" },
      { label: "Nocif", key: "nocif" },
      { label: "Irritant", key: "irritant" },
      { label: "Explosible", key: "explosible" },
      { label: "Toxique", key: "toxique" },
      { label: "Inflammable", key: "extremementInflammable" },
    ];

    headers.forEach(({ label, key }) => {
      const th = document.createElement("th");
      th.textContent = label;
      headerRow.appendChild(th);
    });

    this.moleculesTable.appendChild(headerRow);

    this.moleculesTableData = document.createElement("tbody");
    this.moleculesTable.appendChild(this.moleculesTableData);
  }

  updateData(molecules) {
    this.moleculesTableData.innerHTML = "";
    molecules.forEach((molecule) =>
      this.moleculesTableData.appendChild(this._createRow(molecule)),
    );
  }

  _createRow(molecule) {
    const tr = document.createElement("tr");
    let td;

    td = document.createElement("td");
    td.textContent = molecule.nom;
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.formule;
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.masseMolaire;
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.nbCarbone;
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.nocif ? "\u2713" : "";
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.irritant ? "\u2713" : "";
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.explosible ? "\u2713" : "";
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.toxique ? "\u2713" : "";
    tr.appendChild(td);

    td = document.createElement("td");
    td.textContent = molecule.extremementInflammable ? "\u2713" : "";
    tr.appendChild(td);

    return tr;
  }
}
