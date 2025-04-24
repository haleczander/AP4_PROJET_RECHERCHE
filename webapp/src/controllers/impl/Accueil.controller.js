import services from "../../services/services";
import Controller from "../Controller";
import {
    createMoleculeReaction,
    createProduit,
    getMasseG,
} from "../../../src/utils/molecules.utils";

export default class MoleculesController extends Controller {
    init() {
        this.dataService = services.dataService;
        this.molecules = this.dataService.findAllMolecules();
        this.activations = this.dataService.findAllActivations();

        this.remplirDatalists();
        this.setupAjouts();
    }

    remplirDatalists() {
        const remplir = (liste, tableau, champ) => {
            const datalist = document.getElementById(liste);
            if (!datalist) return;
            datalist.innerHTML = "";
            tableau.forEach((el) => {
                const opt = document.createElement("option");
                opt.value = el[champ];
                datalist.appendChild(opt);
            });
        };

        remplir("liste-reactifs", this.molecules, "nom");
        remplir("liste-catalyseur", this.molecules, "nom");
        remplir("liste-solvant", this.molecules, "nom");
        remplir("liste-activations", this.activations, "nom");
    }

    setupAjouts() {
        document.querySelectorAll(".btn-ajouter").forEach((btn) => {
            btn.addEventListener("click", () => {
                const ligne = btn.closest(".form-row-reactif, .form-row-catalyseur, .form-row-solvant, .form-row-activation");
                if (!ligne) return;

                const nom = ligne.querySelector("input[list]")?.value.trim();
                const type = ligne.classList.contains("form-row-reactif")
                    ? "reactif"
                    : ligne.classList.contains("form-row-catalyseur")
                    ? "catalyseur"
                    : ligne.classList.contains("form-row-solvant")
                    ? "solvant"
                    : "activation";

                const highlightIfEmpty = (input) => {
                    if (!input || !input.value.trim()) {
                        input.style.borderColor = "red";
                        return false;
                    }
                    input.style.borderColor = "#ccc";
                    return true;
                };

                const allInputs = ligne.querySelectorAll("input[type='number'], input[list]");
                let valid = true;
                allInputs.forEach((input) => {
                    if (!highlightIfEmpty(input)) valid = false;
                });
                if (!valid) return;

                if (type === "activation") {
                    const serial = this.activations.find(a => a.nom === nom)?.serial;
                    const duree = parseFloat(ligne.querySelector(".duree-valeur").value);
                    const puissance = parseFloat(ligne.querySelector(".puissance-valeur").value);
                    const energie = parseFloat(ligne.querySelector(".energie-valeur").value);

                    const activation = { serial, nom, duree, puissance, energie };
                    console.log("Activation ajoutée :", activation);
                    return;
                }

                const mol = this.molecules.find(m => m.nom === nom);
                if (!mol) return;

                const molecule = createMoleculeReaction(mol);

                molecule.purete = parseFloat(ligne.querySelector(".purete-valeur").value);
                molecule.volume = parseFloat(ligne.querySelector(".volume-valeur").value);
                molecule.prixG = parseFloat(ligne.querySelector(".prix-valeur").value);

                if (type === "reactif") {
                    molecule.quantite = parseFloat(ligne.querySelector(".quantite-valeur").value);
                    console.log("Réactif ajouté :", molecule);
                } else if (type === "catalyseur") {
                    molecule.irritant = mol.irritant;
                    molecule.recyclabilite = 0;
                    console.log("Catalyseur ajouté :", molecule);
                } else if (type === "solvant") {
                    molecule.nocif = mol.nocif;
                    molecule.densite = 1;
                    molecule.recyclabilite = 0;
                    console.log("Solvant ajouté :", molecule);
                }
            });
        });
    }
}
