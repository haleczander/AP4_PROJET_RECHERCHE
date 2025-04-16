import services from "../../services/services";
import Controller from "../Controller";
import {
    Purification,
    ReactionComplete,
    ReactionPrincipale,
    TraitementPostReactionnel,
  } from "../../../src/models/reaction.model";
  
import {
  createMoleculeReaction,
  createProduit,
  getMasseG,
} from "../../../src/utils/molecules.utils";

export default class MoleculesController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.molecules = this.dataService.findAllMolecules();
    
    this.findAllMoleculesFunction();
  }
  

  findAllMoleculesFunction() {
    const input = document.querySelector('.select-container input');
    const suggestionsContainer = document.querySelector('.suggestions');
    const radioReactif = document.querySelector('input[name="type"][value="reactif"]');
    const radioActivation = document.querySelector('input[name="type"][value="activation"]');
    const radioSolvant = document.querySelector('input[name="type"][value="solvant"]');
    const radioCatalyseur = document.querySelector('input[name="type"][value="catalyseur"]');
    const radioProduit = document.querySelector('input[name="type"][value="produit"]');

    if (!input || !suggestionsContainer || !radioReactif) return;

    input.addEventListener("input", () => {
        const isValidType = radioReactif.checked || radioSolvant.checked || radioCatalyseur.checked;
      
        if (!isValidType) {
            suggestionsContainer.innerHTML = "";
            return;
        }

        const value = input.value.toLowerCase();
        const filtered = this.molecules.filter((mol) =>
            mol.nom.toLowerCase().includes(value)
        );

      suggestionsContainer.innerHTML = "";
      filtered.forEach((mol) => {
        const option = document.createElement("div");
        option.textContent = mol.nom;
        option.addEventListener("click", () => {
          input.value = mol.nom;
          suggestionsContainer.innerHTML = "";
        });
        suggestionsContainer.appendChild(option);
      });
    });

    input.addEventListener("focus", () => {
      input.dispatchEvent(new Event("input"));
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".select-container")) {
        suggestionsContainer.innerHTML = "";
      }
    });
  }
}