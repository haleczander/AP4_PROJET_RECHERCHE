import Activation from "../../src/models/activation.model";
import { createActivationReaction, getEnergieKWh, getPrixEnergie } from "../../src/utils/activations.utils";


const PLAQUE_CHAUFFANTE = new Activation( null, "Plaque chauffante" );


test(
    "test activations.utils getEnergieKWh",
    () => {
        const ACTIVATION = createActivationReaction( PLAQUE_CHAUFFANTE );
        ACTIVATION.dureeM = 90;
        ACTIVATION.puissance = 800;
        

        expect(
            getEnergieKWh( ACTIVATION )
        ).toBe(
            ( 90 * 800 ) / ( 1000 * 60 )
        );
    }
)

test(
    "test activations.utils getPrixEnergie",
    () => {
        const ACTIVATION = createActivationReaction( PLAQUE_CHAUFFANTE );
        ACTIVATION.dureeM = 90;
        ACTIVATION.puissance = 800;

        const PRIX_KWH = 0.20;

        expect(
            getPrixEnergie( ACTIVATION, PRIX_KWH )
        ).toBe(
            PRIX_KWH * ( 90 * 800 ) / ( 1000 * 60 )
        );
    }
)