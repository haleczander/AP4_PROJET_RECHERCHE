export class EnergieService {
  energies = {};

  constructor() {}

  addEnergie(energie) {
    this.energies[energie.key] = energie;
  }

  getEnergies() {
    return this.energies;
  }
}

export default EnergieService;
