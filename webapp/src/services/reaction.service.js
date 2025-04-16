import { getPrixEnergie } from "../utils/activations.utils";
import {
  atomesDiff,
  atomesSum,
  formulaParser,
  getCoefCMR,
  getCoefDanger,
  getCoefToxicite,
  getMasseG,
  getMassePureteG,
  getMasseRecycleeG,
  getMasseRecycleePureteG,
  getPrixEuro,
  moleculeFormulaParser,
} from "../utils/molecules.utils";
import {
  getSum,
  getSumMasseG,
  getSumMassePureteG,
} from "../utils/reactions.utils";

export default class ReactionService {
  constructor() {}

  reactifs(reaction) {
    return reaction.reactionPrincipale.reactifs;
  }

  masseReactifs(reaction) {
    return getSum(this.reactifs(reaction), getMasseG);
  }

  masseMolaireReactifs(reaction) {
    return getSum(this.reactifs(reaction), (reactif) => reactif.masseMolaire);
  }

  nbCarboneReactifs(reaction) {
    return getSum(this.reactifs(reaction), (reactif) => reactif.nbCarbone);
  }

  coefDangerReactifs(reaction) {
    return getSum(this.reactifs(reaction), getCoefDanger);
  }

  coefToxiciteReactifs(reaction) {
    return getSum(this.reactifs(reaction), getCoefToxicite);
  }

  coefCMRReactifs(reaction) {
    return getSum(this.reactifs(reaction), getCoefCMR);
  }

  prixReactifs(reaction) {
    return getSum(this.reactifs(reaction), getPrixEuro);
  }

  solvants(reaction) {
    return reaction.reactionPrincipale.solvants;
  }

  masseSolvants(reaction) {
    return getSum(this.solvants(reaction), (solvant) =>
      getMasseG(solvant, true),
    );
  }

  prixSolvants(reaction) {
    return getSum(this.solvants(reaction), (solvant) =>
      getPrixEuro(solvant, true),
    );
  }

  coefDangerSolvants(reaction) {
    return getSum(this.solvants(reaction), (solvant) =>
      getCoefDanger(solvant, true),
    );
  }

  coefToxiciteSolvants(reaction) {
    return getSum(this.solvants(reaction), (molecule) =>
      getCoefToxicite(molecule, true),
    );
  }

  coefCMRSolvants(reaction) {
    return getSum(this.solvants(reaction), (molecule) =>
      getCoefCMR(molecule, true),
    );
  }

  masseSolvantsRecyclable(reaction) {
    return getSum(this.solvants(reaction), getMasseRecycleePureteG);
  }

  catalyseurs(reaction) {
    return reaction.reactionPrincipale.catalyseurs;
  }

  masseCatalyseurs(reaction) {
    return getSum(this.catalyseurs(reaction), getMasseG);
  }

  prixCatalyseurs(reaction) {
    return getSum(this.catalyseurs(reaction), getPrixEuro);
  }

  coefDangerCatalyseurs(reaction) {
    return getSum(this.catalyseurs(reaction), getCoefDanger);
  }

  coefToxiciteCatalyseurs(reaction) {
    return getSum(this.catalyseurs(reaction), getCoefToxicite);
  }

  coefCMRCatalyseurs(reaction) {
    return getSum(this.catalyseurs(reaction), getCoefCMR);
  }

  masseCatalyseursRecyclable(reaction) {
    return getSum(this.catalyseurs(reaction), getMasseRecycleeG);
  }

  postTraitement(reaction) {
    return reaction.traitementPostReactionnel.reactifs;
  }

  massePostTraitement(reaction) {
    return getSum(this.postTraitement(reaction), (molecule) =>
      getMasseG(molecule, true),
    );
  }

  prixPostTraitement(reaction) {
    return getSum(this.postTraitement(reaction), (molecule) =>
      getPrixEuro(molecule, true),
    );
  }

  coefDangerPostTraitement(reaction) {
    return getSum(this.postTraitement(reaction), (molecule) =>
      getCoefDanger(molecule, true),
    );
  }

  coefToxicitePostTraitement(reaction) {
    return getSum(this.postTraitement(reaction), (molecule) =>
      getCoefToxicite(molecule, true),
    );
  }

  coefCMRPostTraitement(reaction) {
    return getSum(this.postTraitement(reaction), (molecule) =>
      getCoefCMR(molecule, true),
    );
  }

  massePostTraitementRecyclable(reaction) {
    return getSum(this.postTraitement(reaction), getMasseRecycleePureteG);
  }

  purification(reaction) {
    return reaction.purification.reactifs;
  }

  coefDangerPurification(reaction) {
    const erreurPurification = true; // ERREUR dans l'excel
    return getSum(this.purification(reaction), (molecule) =>
      getCoefDanger(molecule, true, erreurPurification),
    );
  }

  coefToxicitePurification(reaction) {
    return getSum(this.purification(reaction), (molecule) =>
      getCoefToxicite(molecule, true),
    );
  }

  coefCMRPurification(reaction) {
    return getSum(this.purification(reaction), (molecule) =>
      getCoefCMR(molecule, true),
    );
  }

  massePurification(reaction) {
    return getSum(this.purification(reaction), (molecule) =>
      getMasseG(molecule, true),
    );
  }

  prixPurification(reaction) {
    return getSum(this.purification(reaction), (molecule) =>
      getPrixEuro(molecule, true),
    );
  }

  massePurificationRecyclable(reaction) {
    return getSum(this.purification(reaction), getMasseRecycleePureteG);
  }

  masseRecyclableReactionPrincipale(reaction) {
    return (
      this.masseSolvantsRecyclable(reaction) +
      this.masseCatalyseursRecyclable(reaction)
    );
  }

  masseRecyclableReactionPrincipale(reaction) {
    return (
      this.masseSolvantsRecyclable(reaction) +
      this.masseCatalyseursRecyclable(reaction)
    );
  }

  masseRecyclable(reaction) {
    return (
      this.masseRecyclableReactionPrincipale(reaction) +
      this.massePostTraitementRecyclable(reaction) +
      this.massePurificationRecyclable(reaction)
    );
  }

  moleculesReactionPrincipale(reaction) {
    return [
      ...this.reactifs(reaction),
      ...this.solvants(reaction),
      ...this.catalyseurs(reaction),
    ];
  }

  moleculesReactionPrincipale(reaction) {
    return [
      ...this.reactifs(reaction),
      ...this.solvants(reaction),
      ...this.catalyseurs(reaction),
    ];
  }

  masseReactionPrincipale(reaction) {
    return (
      this.masseReactifs(reaction) +
      this.masseSolvants(reaction) +
      this.masseCatalyseurs(reaction)
    );
  }

  activationReactionPrincipale(reaction) {
    return reaction.reactionPrincipale.activations;
  }

  activationPostTraitement(reaction) {
    return reaction.traitementPostReactionnel.activations;
  }

  activationPurification(reaction) {
    return reaction.purification.activations;
  }

  prixReactionPrincipale(reaction, activation = false) {
    const prixActivation = activation
      ? getSum(this.activationReactionPrincipale(reaction), getPrixEnergie)
      : 0;
    return (
      this.prixReactifs(reaction) +
      this.prixSolvants(reaction) +
      this.prixCatalyseurs(reaction) +
      prixActivation
    );
  }

  masseReactionComplete(reaction) {
    return (
      this.masseReactionPrincipale(reaction) +
      this.massePostTraitement(reaction) +
      this.massePurification(reaction)
    );
  }

  prixReactionComplete(reaction, activation = false) {
    const prixActivationPostTraitement = activation
      ? getSum(this.activationPostTraitement(reaction), getPrixEnergie)
      : 0;
    const prixActivationPurification = activation
      ? getSum(this.activationPurification(reaction), getPrixEnergie)
      : 0;

    return (
      this.prixReactionPrincipale(reaction, activation) +
      this.prixPostTraitement(reaction) +
      prixActivationPostTraitement +
      this.prixPurification(reaction) +
      prixActivationPurification
    );
  }

  nMolProduit(reaction) {
    const produit = reaction.produit;
    const purete = produit.purete / 100;
    const massePure = purete * produit.masseG;
    return massePure / produit.masseMolaire;
  }

  residuReaction(reaction) {
    const formulesReaction = this.reactifs(reaction).map(moleculeFormulaParser);
    const atomesReaction = atomesSum(formulesReaction);
    const atomesProduit = formulaParser(reaction.produit.formule);

    return atomesDiff(atomesReaction, atomesProduit);
  }
}
