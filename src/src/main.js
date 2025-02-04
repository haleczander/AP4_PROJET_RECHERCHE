import { LocalDataService } from "./services/impl/local.data.service"

console.log('Je suis bien importé dans main.js')

const service = new LocalDataService()

console.log("Find all molecules :", service.findAllMolecules());

console.log("Find by Any CH :", service.findMoleculesByAny("CH"))

console.log("Find by CAS 224 :", service.findMoleculesByCas("224"))

console.log ("Find by Formule '2O'  :", service.findMoleculesByFormule("2O"))