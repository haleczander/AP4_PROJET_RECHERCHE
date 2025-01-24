import { LocalDataService } from "./services/impl/local.data.service"

console.log('Je suis bien importé')

const service = new LocalDataService()

console.log( service.findMoleculesByAny("ol"))