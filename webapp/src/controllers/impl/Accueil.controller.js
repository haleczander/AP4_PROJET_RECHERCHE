import services from "../../services/services";
import Controller from "../Controller";
import {
  createMoleculeReaction,
} from "../../../src/utils/molecules.utils";

export default class MoleculesController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.molecules = this.dataService.findAllMolecules();

    this.remplirToutesLesDatalists();
    this.ajouterListeners();
  }

  remplirToutesLesDatalists() {
    this.remplirDatalist("liste-reactifs");
    this.remplirDatalist("liste-catalyseur");
    this.remplirDatalist("liste-solvant");
  }

  remplirDatalist(id) {
    const datalist = document.getElementById(id);
    if (!datalist) return;

    datalist.innerHTML = "";
    this.molecules.forEach((mol) => {
      const opt = document.createElement("option");
      opt.value = mol.nom;
      datalist.appendChild(opt);
    });
  }

  ajouterListeners() {
    const btns = document.querySelectorAll(".btn-ajouter");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest(".form-row-reactif, .form-row-catalyseur, .form-row-solvant");
        if (!row) return;

        const input = row.querySelector("input[list]");
        const nom = input?.value.trim();
        if (!nom) {
          console.warn("Aucune molécule saisie.");
          return;
        }

        const mol = this.molecules.find(m => m.nom.toLowerCase() === nom.toLowerCase());
        if (!mol) {
          console.warn("Molécule non trouvée :", nom);
          return;
        }

        const molReac = createMoleculeReaction(mol);

        // Valeurs aléatoires pour test
        molReac.purete = Math.floor(Math.random() * 51) + 50;
        molReac.volume = parseFloat((Math.random() * 5).toFixed(2));
        molReac.prixG = parseFloat((Math.random() * 0.05).toFixed(3));

        if (row.classList.contains("form-row-reactif")) {
          const qteInput = row.querySelector(".quantite-valeur");
          molReac.coefStoechiometrique = parseInt(qteInput?.value) || 1;
        }

        if (row.classList.contains("form-row-catalyseur") || row.classList.contains("form-row-solvant")) {
          molReac.recyclabilite = Math.floor(Math.random() * 100);
          molReac.densite = parseFloat((0.6 + Math.random()).toFixed(2));
        }

        console.log("Molécule ajoutée :", molReac);
      });
    });
  }
}