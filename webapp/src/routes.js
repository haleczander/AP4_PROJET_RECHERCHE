import AccueilController from "./controllers/impl/Accueil.controller";
import AjoutMoleculeController from "./controllers/impl/AjoutMolecule.controller";
import HistoriqueController from "./controllers/impl/Historique.controller";
import MoleculesController from "./controllers/impl/Molecules.controller";

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
    }
];

export default routes;