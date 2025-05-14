import { conversionDangerR, conversionDangerR_H, conversionH_GHS } from "../../data/conversionDanger"

export default class DangerService {
    conversionDangerR_H = conversionDangerR_H;
    conversionDangerR = conversionDangerR;
    conversionH_GHS = conversionH_GHS;

    getDangerR( dangerH ) {
        return this.conversionDangerR_H[ dangerH.toUpperCase() ] || [];
    }

    getDanger( dangerR ) {
        const result = new Set;
        for (const [key, values] of Object.entries(this.conversionDangerR)) {
            if ( values.includes(dangerR.toUpperCase()) ) {
                result.add(key);
            }
        }
        return [...result];
    }

    getGHS( dangerH ) {
        const result = new Set();
        for (const [key, values] of Object.entries(this.conversionH_GHS)) {
            if ( values.includes(dangerH.toUpperCase()) ) {
                result.add(key);
            }
        }
        return [...result];
    }

    getMoleculePictogrammes( molecule ) {
        const pictogrammes = new Set();
        molecule.danger.forEach( dangerH => {
            this.getGHS(dangerH).forEach( pictogramme => pictogrammes.add(pictogramme) );
        });
        return [...pictogrammes];
    }

}