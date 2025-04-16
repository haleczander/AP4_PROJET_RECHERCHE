export class Resultat {
  constructor(
    economieCarbone,
    economieAtomes,
    rendement,
    efficaciteMassique,
    pourcentageMatiereRecyclee,
    coefDanger,
    coefToxicite,
  ) {
    this.economieCarbone = economieCarbone;
    this.economieAtomes = economieAtomes;
    this.rendement = rendement;
    this.efficaciteMassique = efficaciteMassique;
    this.pourcentageMatiereRecyclee = pourcentageMatiereRecyclee;
    this.coefDanger = coefDanger;
    this.coefToxicite = coefToxicite;
  }
}
