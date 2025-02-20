import { createActivationReaction, getEnergieKWh, getPrixEnergie } from "../../src/utils/activations.utils";
import { PLAQUE_CHAUFFANTE } from "../data/activations.data";
import Energie from "../../src/models/energie.model"

describe(
    "test activations.utils",
    () => {
        let TEST_PLAQUE_CHAUFFANTE;
        let PRIX_KWH;

        beforeAll( () => {
            TEST_PLAQUE_CHAUFFANTE = createActivationReaction( PLAQUE_CHAUFFANTE );
            TEST_PLAQUE_CHAUFFANTE.dureeM = 90;
            TEST_PLAQUE_CHAUFFANTE.puissance = 800;
            
            PRIX_KWH = 0.20;
            const energie = new Energie( "220V", PRIX_KWH )
            TEST_PLAQUE_CHAUFFANTE.energie = energie;
        } );

        test(
            "test activations.utils getEnergieKWh",
            () => {
                expect(
                    getEnergieKWh( TEST_PLAQUE_CHAUFFANTE )
                ).toBe(
                    ( 90 * 800 ) / ( 1000 * 60 )
                );
            }
        )
        
        test(
            "test activations.utils getPrixEnergie",
            () => {
                expect(
                    getPrixEnergie( TEST_PLAQUE_CHAUFFANTE )
                ).toBe(
                    PRIX_KWH * ( 90 * 800 ) / ( 1000 * 60 )
                );
            }
        )
    }
);
