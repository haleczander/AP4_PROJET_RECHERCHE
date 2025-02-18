import { createActivationReaction, getEnergieKWh, getPrixEnergie } from "../../src/utils/activations.utils";
import { PLAQUE_CHAUFFANTE } from "../data/activations.data";

describe(
    "test activations.utils",
    () => {
        let TEST_PLAQUE_CHAUFFANTE;

        beforeAll( () => {
            TEST_PLAQUE_CHAUFFANTE = createActivationReaction( PLAQUE_CHAUFFANTE );
            TEST_PLAQUE_CHAUFFANTE.dureeM = 90;
            TEST_PLAQUE_CHAUFFANTE.puissance = 800;
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
                const PRIX_KWH = 0.20;
        
                expect(
                    getPrixEnergie( TEST_PLAQUE_CHAUFFANTE, PRIX_KWH )
                ).toBe(
                    PRIX_KWH * ( 90 * 800 ) / ( 1000 * 60 )
                );
            }
        )
    }
);
