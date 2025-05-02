import services from "../../services/services";
import Controller from "../Controller";
import { createMoleculeReaction } from "../../../src/utils/molecules.utils";
import { populateDatalist } from "../../../src/utils/form.utils";
import { ReactionComplete } from "../../models/reaction.model";
import { createActivationReaction } from "../../utils/activations.utils";
import Energie from "../../models/energie.model";
import { Resultat } from "../../models/resultat.model";
import { INDICATEURS } from "../../../src/settings"
import ReactionMVCController from "../../mvc/reaction/reactioN.mvc.controller";
import CanvasReactionMVCView from "../../mvc/reaction/impl/canvas.reaction.mvc.view";
import BIGINELLI  from "../../../tests/data/reactions/biginelli.reaction"

export default class MoleculesController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.calculService = services.calculService;
    this.molecules = this.dataService.findAllMolecules();
    this.activations = this.dataService.findAllActivations();

    this.reaction = BIGINELLI;//new ReactionComplete();
    this.resultats = new Resultat();

    this.mvcController = new ReactionMVCController(this.reaction);
    const canvasView = new CanvasReactionMVCView(this.mvcController, this.container.querySelector("#canvas-reaction"));
    this.mvcController.addView(canvasView);

    this._initDataLists();
    this._initForms();
  }

  _moleculeDisplay(molecule) {
    return `${molecule.nom} (${molecule.formule})`;
  }

  _activationDisplay(activation) {
    return `${activation.nom}`;
  }

  _moleculeByDisplay(display) {
    return this.molecules.find((molecule) => {
      return this._moleculeDisplay(molecule) === display;
    });
  }

  _initDataLists() {
    populateDatalist(
      "datalist-molecules",
      this.molecules,
      this._moleculeDisplay,
    );
    populateDatalist(
      "datalist-activations",
      this.activations,
      this._activationDisplay,
    );
  }

  _reactionSubmit( event ) {
    event.preventDefault();
    this.resultats = this.calculService.resultats( this.reaction, INDICATEURS.map(i => new i()) );
    console.log(this.reaction, this.resultats)
  }

  _initForms() {
    const reactionForm = this.container.querySelector("#form-reaction");
    this.addListener(reactionForm, "submit", event => this._reactionSubmit( event ))
    

    const reactionprincipaleContainer = this.container.querySelector("#container-reaction-principale")

    const rpReactifForm = reactionprincipaleContainer.querySelector(
      "#form-reactif-reaction-principale",
    );

    this.addListener(rpReactifForm, "submit", (event) =>
      this._addFormMolecule(event, this.reaction.reactionPrincipale.reactifs),
    );

    const rpCatalyseurForm = reactionprincipaleContainer.querySelector(
      "#form-catalyseur-reaction-principale",
    );
    this.addListener(rpCatalyseurForm, "submit", (event) =>
      this._addFormMolecule(
        event,
        this.reaction.reactionPrincipale.catalyseurs,
      ),
    );

    const rpSolvantForm = reactionprincipaleContainer.querySelector(
      "#form-solvant-reaction-principale",
    );
    this.addListener(rpSolvantForm, "submit", (event) =>
      this._addFormMolecule(event, this.reaction.reactionPrincipale.solvants),
    );

    const rpActivationForm = reactionprincipaleContainer.querySelector(
      "#form-activation-reaction-principale",
    );
    this.addListener(rpActivationForm, "submit", (event) =>
      this._addFormActivation(
        event,
        this.reaction.reactionPrincipale.activations,
      ),
    );

    const postTraitementContainer = this.container.querySelector(
      "#container-post-traitement",
    );

    const ptReactifForm = postTraitementContainer.querySelector(
      "#form-reactif-post-traitement",
    );
    this.addListener(ptReactifForm, "submit", (event) =>
      this._addFormMolecule(
        event,
        this.reaction.traitementPostReactionnel.reactifs,
      ),
    );

    const ptActivationForm = postTraitementContainer.querySelector(
      "#form-activation-post-traitement",
    );
    this.addListener(ptActivationForm, "submit", (event) =>
      this._addFormMolecule(
        event,
        this.reaction.traitementPostReactionnel.activations,
      ),
    );

    const purificationContainer = this.container.querySelector(
      "#container-purification",
    );

    const purifReactifForm = purificationContainer.querySelector(
      "#form-reactif-purification",
    );
    this.addListener(purifReactifForm, "submit", (event) =>
      this._addFormMolecule(event, this.reaction.purification.reactifs),
    );

    const purifActivationForm = purificationContainer.querySelector(
      "#form-activation-purification",
    );
    this.addListener(purifActivationForm, "submit", (event) =>
      this._addFormMolecule(event, this.reaction.purification.activations),
    );

    const produitContainer = this.container.querySelector("#container-produit");

    const produitForm = produitContainer.querySelector(
      "#form-produit",
    );
    this.addListener(produitForm, "submit", (event) =>
      this._addProduit(event, this.reaction ),
    );
  }

  _createMoleculeReaction(formData) {
    const coefStoechiometrique = parseFloat(
      formData.get("coefStoechiometrique"),
    );
    const moleculeDisplay = formData.get("molecule");
    const purete = parseFloat(formData.get("purete"));
    const volume = parseFloat(formData.get("volume"));
    const prixG = parseFloat(formData.get("prixG"));

    const molecule = this._moleculeByDisplay(moleculeDisplay);

    if (!molecule) {
      console.error("Molécule introuvable:", moleculeDisplay);
      return;
    }

    return {
      ...createMoleculeReaction(molecule),
      coefStoechiometrique,
      purete,
      volume,
      prixG,
    };
  }

  _addFormMolecule(event, list) {
    event.preventDefault();
    const molecule = this._createMoleculeReaction(new FormData(event.target));
    list.push(molecule);
  }

  _createActivationReaction(formData) {
    const activationNomDisplay = formData.get("activationNom");
    const activationDuree = parseFloat(formData.get("activationDuree"));
    const activationPuissance = parseFloat(formData.get("activationPuissance"));
    const prixEnergie = parseFloat(formData.get("prixEnergie"));

    const activation = this.activations.find(
      (activation) =>
        this._activationDisplay(activation) === activationNomDisplay,
    );

    if (!activation) {
      console.error("Activation introuvable:", activationNomDisplay);
      return;
    }

    return {
      ...createActivationReaction(activation),
      dureeM: activationDuree,
      puissanceW: activationPuissance,
      energie: new Energie("", prixEnergie),
    };
  }

  _addFormActivation(event, list) {
    event.preventDefault();
    const activation = this._createActivationReaction(
      new FormData(event.target),
    );
    list.push(activation);
  }

  _addProduit(event, reaction) {
    event.preventDefault();
    const produit = this._createMoleculeReaction(new FormData(event.target));
    reaction.produit = produit;
  }

}
