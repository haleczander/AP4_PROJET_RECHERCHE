import { createMolecule } from './utils/molecules.utils.js';

console.log('Je suis bien importé')

const form = document.getElementById('molecule-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupérer les valeurs des champs texte
        const nom = document.getElementById('nom').value.trim();
        const cas = document.getElementById('cas').value.trim();
        const masseMolaire = parseFloat(document.getElementById('masseMolaire').value) || 0;
        const formule = document.getElementById('formule').value.trim();

        // Fonction pour récupérer l'état des cases à cocher
        const getCheckboxValue = (id) => document.getElementById(id).checked;

        // Création de l'objet molécule
        const molecule = createMolecule(
            nom, formule, cas, masseMolaire, 0, 0, // densité et nbCarbone à 0 pour l'instant
            getCheckboxValue('stat-nocif'),
            getCheckboxValue('stat-irritant'),
            getCheckboxValue('stat-explosible'),
            getCheckboxValue('stat-danger-environnement'),
            getCheckboxValue('stat-toxique'),
            getCheckboxValue('stat-tres-toxique'),
            getCheckboxValue('stat-facilement-inflammable'),
            getCheckboxValue('stat-extremement-inflammable'),
            getCheckboxValue('stat-r40'),
            getCheckboxValue('stat-r45'),
            getCheckboxValue('stat-r49'),
            getCheckboxValue('stat-r46'),
            getCheckboxValue('stat-r60'),
            getCheckboxValue('stat-r61'),
            getCheckboxValue('stat-r62'),
            getCheckboxValue('stat-r63')
        );

        console.log("Nouvelle molécule créée :", molecule);
    });