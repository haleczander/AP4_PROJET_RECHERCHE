import AccueilController from "./controllers/AccueilController";
import AjoutMoleculeController from "./controllers/AjoutMoleculeController";
import HistoriqueController from "./controllers/HistoriqueController";
import ModelisationController from "./controllers/ModelisationController";
import MoleculesController from "./controllers/MoleculesController";

export const routes = [
    {
        nom: 'Accueil',
        chemin: '/',
        cheminHtml: 'accueil.html',
        controller: AccueilController,
        icone: 'ic_dashboard.png'
    },
    {
        nom: 'Molécules',
        chemin: '/molecules',
        cheminHtml: 'molecules.html',
        controller: MoleculesController,
        icone: 'ic_domain.png'
    },
    {
        nom: 'Ajout de molécule',
        chemin: '/ajout-molecule',
        cheminHtml: 'ajout-molecule.html',
        controller: AjoutMoleculeController,
        icone: 'ic_event_note.png'
    }, 
    {
        nom: 'Historique des calculs',
        chemin: '/historique',
        cheminHtml: 'historique.html',
        controller: HistoriqueController,
        icone: 'ic_account_box.png'
    },
    {
        nom: 'Modélisation de molécules',
        chemin: '/modelisation-molecules',
        cheminHtml: 'modelisationMolecules.html',
        controller: ModelisationController,
        icone: 'ic_account_box.png'
    },
];

export default routes;