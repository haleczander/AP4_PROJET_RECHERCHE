import services from "../../services/services";
import Controller from "../Controller";
import { createMoleculeReaction } from "../../../src/utils/molecules.utils";
import { populateDatalist } from "../../../src/utils/form.utils";
import { ReactionComplete } from "../../models/reaction.model";
import { createActivationReaction } from "../../utils/activations.utils";
import Energie from "../../models/energie.model";
import { Resultat } from "../../models/resultat.model";
import { INDICATEURS } from "../../../src/settings"
import ReactionMVCController from "../../mvc/reaction/reaction.mvc.controller";
import CanvasReactionMVCView from "../../mvc/reaction/impl/canvas.reaction.mvc.view";
import BIGINELLI  from "../../../tests/data/reactions/biginelli.reaction"
import CalculService from "../../services/calcul.service";
import { moleculeExists } from "../../utils/reactions.utils";



export default class AccueilController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.calculService = new CalculService();
    this._initData();

    this.indicateurs = INDICATEURS.map((i) => new i());

    this.reaction = BIGINELLI; //new ReactionComplete();
    this.resultats = new Resultat();

    this._initForms();
    this._initReactionMVC();
    this._initResultatsMVC();
  }

    async _initData() {
    this.loading(true);
    this.dataService.ready().then(() => {
      this.molecules = this.dataService.findAllMolecules(); 
      this.activations = this.dataService.findAllActivations();
    })
    .then( () => this._initDataLists() )
    .then( () => this.loading(false) );
  }

  _initReactionMVC() {
    this.mvcController = new ReactionMVCController(this.reaction);
    const canvasView = new CanvasReactionMVCView(this.mvcController, this.container.querySelector("#canvas-reaction"));
    this.mvcController.addView(canvasView);
  }



  _initResultatsMVC() {
    this.mvcResultatController = new ResultatMVCController();
    const radarView = new RadarResultatMVCView(
      this.mvcResultatController,
      this.container.querySelector("#radar-chart-principale"),
      this.container.querySelector("#radar-chart-complete")
    );
    this.mvcResultatController.addView(radarView);
    const barView = new BarResultatMVCView(
      this.mvcResultatController,
      this.container.querySelector("#bar-chart-principale"),
      this.container.querySelector("#bar-chart-complete"),  
      );
      this.mvcResultatController.addView(barView);
      const tableView = new TableResultatMVCView(
        this.mvcResultatController,
        this.container.querySelector("#tableau-reaction")
      );
      this.mvcResultatController.addView(tableView);
  }

  _reactionSubmit(event) {
    event.preventDefault();
    this.resultats = this.calculService.resultats( this.reaction, this.indicateurs)
    this.mvcResultatController.updateResults(this.resultats);
    return;
  }

  _moleculeDisplay(molecule) {
    return `${molecule.nom} (${molecule.formule})`;
  }

  _activationDisplay(activation) {
    return `${activation.nom}`;
  }

  _moleculeByDisplay(display) {
    return this.molecules.find(
      (molecule) => this._moleculeDisplay(molecule) === display
    );
  }

  _initDataLists() {
    populateDatalist(
      "datalist-molecules",
      this.molecules,
      this._moleculeDisplay
    );
    populateDatalist(
      "datalist-activations",
      this.activations,
      this._activationDisplay
    );
  }

  _initForms() {
    const getBySelector = (selector) => this.container.querySelector(selector);

    this.addListener(getBySelector("#form-reaction"), "submit", (e) =>
      this._reactionSubmit(e)
    );
    this.addListener(getBySelector("#form-reactif-reaction-principale"), "submit", (e) =>
      this._addFormMolecule(e, this.reaction.reactionPrincipale.reactifs)
    );
    this.addListener(
      getBySelector("#form-catalyseur-reaction-principale"),
      "submit",
      (e) =>
        this._addFormMolecule(e, this.reaction.reactionPrincipale.catalyseurs)
    );
    this.addListener(getBySelector("#form-solvant-reaction-principale"), "submit", (e) =>
      this._addFormMolecule(e, this.reaction.reactionPrincipale.solvants)
    );
    this.addListener(
      getBySelector("#form-activation-reaction-principale"),
      "submit",
      (e) =>
        this._addFormActivation(e, this.reaction.reactionPrincipale.activations)
    );
    this.addListener(getBySelector("#form-reactif-post-traitement"), "submit", (e) =>
      this._addFormMolecule(e, this.reaction.traitementPostReactionnel.reactifs)
    );
    this.addListener(getBySelector("#form-activation-post-traitement"), "submit", (e) =>
      this._addFormActivation(
        e,
        this.reaction.traitementPostReactionnel.activations
      )
    );
    this.addListener(getBySelector("#form-reactif-purification"), "submit", (e) =>
      this._addFormMolecule(e, this.reaction.purification.reactifs)
    );
    this.addListener(getBySelector("#form-activation-purification"), "submit", (e) =>
      this._addFormActivation(e, this.reaction.purification.activations)
    );
    this.addListener(getBySelector("#form-produit"), "submit", (e) =>
      this._addProduit(e, this.reaction)
    );
  }

  _createMoleculeReaction(formData) {
    const molecule = this._moleculeByDisplay(formData.get("molecule"));
    if (!molecule)
      return console.error("Molécule introuvable:", formData.get("molecule"));
    return {
      ...createMoleculeReaction(molecule),
      coefStoechiometrique: parseFloat(formData.get("coefStoechiometrique")),
      purete: parseFloat(formData.get("purete")),
      volume: parseFloat(formData.get("volume")),
      prixG: parseFloat(formData.get("prixG")),
    };
  }

  _addFormMolecule(event, list) {
    event.preventDefault();
    const molecule = this._createMoleculeReaction(new FormData(event.target));
    const existing = moleculeExists( molecule, list );
    if (!existing) {
      list.push(molecule);
    } else {
      existing.volume += molecule.volume;
    }
    event.target.reset();
  }

  _createActivationReaction(formData) {
    const nom = formData.get("activationNom");
    const activation = this.activations.find(
      (a) => this._activationDisplay(a) === nom
    );
    if (!activation) return console.error("Activation introuvable:", nom);

    return {
      ...createActivationReaction(activation),
      dureeM: parseFloat(formData.get("activationDuree")),
      puissance: parseFloat(formData.get("activationPuissance")),
      energie: new Energie("", parseFloat(formData.get("prixEnergie"))),
    };
  }

  _addFormActivation(event, list) {
    event.preventDefault();
    const activation = this._createActivationReaction(
      new FormData(event.target)
    );
      list.push(activation);
      event.target.reset();
  }

  _addProduit(event, reaction) {
    event.preventDefault();
    const produit = this._createMoleculeReaction(new FormData(event.target));
    reaction.produit = produit;
  }

}
