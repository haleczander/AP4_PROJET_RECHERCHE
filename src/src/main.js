//  node_modules/.bin/vite build --watch

import { LocalDataService } from "./services/impl/local.data.service"

console.log('Je suis bien importé dans main.js')

const service = new LocalDataService()

console.log( service.findAllMolecules());

console.log( service.findMoleculesByAny("CH"))

console.log( service.findMoleculesByCas("224"))

console.log ( service.findMoleculesByFormule("CH"))

// non fonctionnel

// const newMolecule = {
//     cas: '123-45-6',
//     nom: 'Nouvelle Molécule',
//     formule: 'C3H6O',
//     masseMolaire: 58.08,
//     nbCarbone: 3,
// };

// service.addMolecule(newMolecule);
