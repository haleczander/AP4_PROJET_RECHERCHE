import { ActivationReaction } from "../models/activation.reaction.model";

export function getEnergieKWh( activation ) {
    const dureeM = activation.dureeM;
    const puissanceW = activation.puissance;
    const puissanceKw = puissanceW / 1000; 

    return ( dureeM * puissanceKw ) / 60;
}

export function getPrixEnergie( activation ) {
    const energieKWh = getEnergieKWh( activation );
    const prixKWh = activation.energie.prixKWh;

    return energieKWh * prixKWh;
}

export function createActivationReaction( activation  ) {

    const activationReaction = new ActivationReaction( 
        null, 
        activation.nom 
    );
    return activationReaction;
}