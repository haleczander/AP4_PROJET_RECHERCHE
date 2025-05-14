import { INDICATEURS, BILAN_INDICATEURS } from "../settings";

export function serviceCalculComplet() {
    INDICATEURS.forEach( indicateur => calculService.addIndicateur( new indicateur() ) ); 
    return calculService;
}

export function radarResults( results ) {
    const keys = BILAN_INDICATEURS.map( indicateur => new indicateur().code );
    const filtered =  Object.fromEntries( Object.entries( results ).filter(([key]) => keys.includes(key)) );
    return filtered;
}