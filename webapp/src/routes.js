import MoleculesController from "./controllers/MoleculesController";

export const routes = [
    {
        nom: 'Accueil',
        chemin: '/',
        cheminHtml: 'accueil.html',
        controller: null,
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
        controller: null,
        icone: 'ic_event_note.png'
    }, 
    {
        nom: 'Historique des calculs',
        chemin: '/historique',
        cheminHtml: 'historique.html',
        controller: null,
        icone: 'ic_account_box.png'
    }
];

export default routes;