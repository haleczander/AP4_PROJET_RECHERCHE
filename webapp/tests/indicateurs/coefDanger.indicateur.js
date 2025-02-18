import CoefDanger from "../../src/indicateurs/impl/coefDanger.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test CoefDanger : Reaction de Biginelli",
    () => {
        let reaction;
        let indicateur;

        beforeAll( 
            () => {
                reaction = REACTION_BIGINELLI;
                indicateur = new CoefDanger();
            } 
        );

        test( 
            "Réaction Principale",
            () => {
                expect(
                    indicateur.reactionPrincipale( reaction )
                ).toBeCloseTo(
                    0.900, 3
                );
            }
        )

        test( 
            "Réaction complète",
            () => {
                expect(
                    indicateur.reactionComplete( reaction )
                ).toBeCloseTo(
                    0.882, 3
                );
            }
        )



    }
)