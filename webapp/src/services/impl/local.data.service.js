import DataService from "../data.service";
import { filterMolecule } from "../../utils/filters.utils";
import CASComparison from "../../comparisons/impl/CAS.comparison";
import ContainsIgnoreCaseComparison from "../../comparisons/impl/ContainsIgnoreCase.comparison";

export class LocalDataService extends DataService {
  _molecules = [];
  _activations = [];

  constructor() {
    super();
    this.casComp = new CASComparison();
    this.containsIgnoreCaseComp = new ContainsIgnoreCaseComparison();
  }

  set molecules(molecules) {
    this._molecules = molecules;
  }

  set activations(activations) {
    this._activations = activations;
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

export default LocalDataService;
