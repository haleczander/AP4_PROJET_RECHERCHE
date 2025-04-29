import { AccueilController, MoleculesController, AjoutMoleculeController } from "./controllers";

export const routes = [
  {
    nom: "Accueil",
    chemin: "/",
    cheminHtml: "accueil.html",
    controller: AccueilController,
    icone: "ic_dashboard.png",
  },
  {
    nom: "Molécules",
    chemin: "/molecules",
    cheminHtml: "molecules.html",
    controller: MoleculesController,
    icone: "ic_domain.png",
  },
  {
    nom: "Ajout de molécule",
    chemin: "/ajout-molecule",
    cheminHtml: "ajout-molecule.html",
    controller: AjoutMoleculeController,
    icone: "ic_event_note.png",
  },
];

export default routes;
