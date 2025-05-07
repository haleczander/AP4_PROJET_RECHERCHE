import DataService from "../data.service";
import { filterMolecule } from "../../utils/filters.utils";
import CASComparison from "../../comparisons/impl/CAS.comparison";
import ContainsIgnoreCaseComparison from "../../comparisons/impl/ContainsIgnoreCase.comparison";

export default class LocalDataService extends DataService {
  _molecules = [];
  _activations = [];


  _readyPromise = null;
  readyPromise = new Promise((resolve) => {
    this._readyPromise = resolve;
  });

  constructor() {
    super();
    this.casComp = new CASComparison();
    this.containsIgnoreCaseComp = new ContainsIgnoreCaseComparison();
  }

  async ready() {
    await this.readyPromise;
  }

  importData(molecules, activations) {
    if (!Array.isArray(molecules) || !Array.isArray(activations)) {
      throw new Error("Invalid data format. Expected arrays.");
    }

    this._molecules = molecules;
    this._activations = activations;
    this._readyPromise();
  }

  addMolecule( molecule ) {
    this._molecules.push( molecule );
  }

  addActivation( activation ) {
    this._activations.push( activation );
  }

  findAllMolecules() {
    return [...this._molecules];
  }

  findMoleculesByAny(needle) {
    return this._molecules.filter((molecule) =>
      filterMolecule(needle, molecule),
    );
  }

  findMoleculesByCas(needle) {
    return this._molecules.filter((molecule) =>
      this.casComp.compare(needle, molecule.cas),
    );
  }

  findMoleculesByFormule(needle) {
    return this._molecules.filter((molecule) =>
      this.containsIgnoreCaseComp.compare(needle, molecule.formule),
    );
  }

  findMoleculesByName(needle) {
    return this._molecules.filter((molecule) =>
      this.containsIgnoreCaseComp.compare(needle, molecule.nom),
    );
  }

  findAllActivations() {
    return [ ...this._activations ];
  }
}
